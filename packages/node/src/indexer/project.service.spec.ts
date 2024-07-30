// Copyright 2020-2024 SubQuery Pte Ltd authors & contributors
// SPDX-License-Identifier: GPL-3.0

import { EventEmitter2, EventEmitterModule } from '@nestjs/event-emitter';
import { Test } from '@nestjs/testing';
import {
  ConnectionPoolService,
  ConnectionPoolStateManager,
  NodeConfig,
  ProjectUpgradeService,
  upgradableSubqueryProject,
} from '@subql/node-core';
import { SubstrateDatasourceKind, SubstrateHandlerKind } from '@subql/types';
import { GraphQLSchema } from 'graphql';
import { SubqueryProject } from '../configure/SubqueryProject';
import { ApiService } from './api.service';
import { DsProcessorService } from './ds-processor.service';
import { DynamicDsService } from './dynamic-ds.service';
import { ProjectService } from './project.service';

function testSubqueryProject(): SubqueryProject {
  return {
    id: 'test',
    root: './',
    network: {
      endpoint: ['https://polkadot.api.onfinality.io/public'],
      chainId:
        '0x91b171bb158e2d3848fa23a9f1c25182fb8e20313b2c1eb49219da7a70ce90c3',
    },
    dataSources: [
      {
        kind: SubstrateDatasourceKind.Runtime,
        startBlock: 1,
        mapping: {
          file: '',
          handlers: [
            { handler: 'testSandbox', kind: SubstrateHandlerKind.Event },
          ],
        },
      },
    ],
    schema: new GraphQLSchema({}),
    templates: [],
    chainTypes: {
      types: {
        TestType: 'u32',
      },
    },
    applyCronTimestamps: () => jest.fn(),
  } as unknown as SubqueryProject;
}

const demoProjects = [
  testSubqueryProject(),
  {
    parent: {
      untilBlock: 4,
      reference: '0',
    },
    ...testSubqueryProject(),
    chainTypes: {
      types: {
        TestType: 'u32',
        DispatchErrorModule: 'DispatchErrorModuleU8',
      },
    },
  },
] as SubqueryProject[];

jest.setTimeout(100_000);

describe('ProjectService', () => {
  let projectService: ProjectService;
  let apiService: ApiService;
  let projectUpgradeService: ProjectUpgradeService<SubqueryProject>;

  jest
    .spyOn(ProjectUpgradeService as any, 'rewindableCheck')
    .mockImplementation(() => true);

  beforeEach(async () => {
    const projectUpgrade = await ProjectUpgradeService.create(
      demoProjects[1],
      (id) => Promise.resolve(demoProjects[parseInt(id, 10)]),
      1,
    );

    const p = upgradableSubqueryProject(projectUpgrade);

    const module = await Test.createTestingModule({
      providers: [
        ConnectionPoolStateManager,
        ConnectionPoolService,
        {
          provide: 'ISubqueryProject',
          useFactory: () => p,
        },
        {
          provide: NodeConfig,
          useFactory: () => ({}),
        },
        {
          provide: ProjectService,
          useFactory: (apiService: ApiService, project: SubqueryProject) =>
            new ProjectService(
              {
                validateProjectCustomDatasources: jest.fn(),
              } as unknown as DsProcessorService,
              apiService,
              null as unknown as any,
              null as unknown as any,
              { query: jest.fn() } as unknown as any,
              project,
              projectUpgrade,
              {
                initCoreTables: jest.fn(),
                storeCache: {
                  metadata: {},
                  flushCache: jest.fn(),
                  _flushCache: { bind: jest.fn() },
                },
              } as unknown as any,
              { unsafe: false } as unknown as NodeConfig,
              {
                getDynamicDatasources: jest.fn().mockResolvedValue([]),
                init: jest.fn(),
              } as unknown as DynamicDsService,
              null as unknown as any,
              null as unknown as any,
            ),
          inject: [ApiService, 'ISubqueryProject'],
        },
        EventEmitter2,
        ApiService,
        {
          provide: ProjectUpgradeService,
          useValue: projectUpgrade,
        },
      ],
      imports: [EventEmitterModule.forRoot()],
    }).compile();

    const app = module.createNestApplication();
    await app.init();
    apiService = app.get(ApiService);
    await apiService.init();
    projectUpgradeService = app.get(
      ProjectUpgradeService,
    ) as ProjectUpgradeService<SubqueryProject>;

    (projectUpgradeService as any).updateIndexedDeployments = jest.fn();
    (projectUpgradeService as any).getDeploymentsMetadata = jest
      .fn()
      .mockResolvedValue({ 1: 'project1', 4: 'project4' } as Record<
        number,
        string
      >);
    (projectUpgradeService as any).validateIndexedData = jest
      .fn()
      .mockReturnValue(5);
    projectService = module.get(ProjectService);
    // Mock db related returns
    (projectService as any).ensureProject = jest
      .fn()
      .mockResolvedValue('mock-schema');
    (projectService as any).ensureMetadata = jest.fn();
    (projectService as any).initDbSchema = jest.fn();
    (projectService as any).initUnfinalizedInternal = jest
      .fn()
      .mockResolvedValue(undefined);
  });

  it('reload chainTypes when project changed, on init', async () => {
    const spyOnApiUpdateChainTypes = jest.spyOn(apiService, 'updateChainTypes');
    // mock last processed height
    (projectService as any).getLastProcessedHeight = jest
      .fn()
      .mockResolvedValue(4);

    // When init, api use old chain types
    expect((apiService.api as any)._options.types).toStrictEqual({
      TestType: 'u32',
    });

    await projectService.init(5);

    // During preprocess, it should trigger update chain types

    await projectUpgradeService.setCurrentHeight(5);

    expect((projectService as any).apiService.api._options.types).toStrictEqual(
      { TestType: 'u32', DispatchErrorModule: 'DispatchErrorModuleU8' },
    );

    expect(spyOnApiUpdateChainTypes).toHaveBeenCalledTimes(1);
  });
});
