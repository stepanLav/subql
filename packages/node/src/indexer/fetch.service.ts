// Copyright 2020-2024 SubQuery Pte Ltd authors & contributors
// SPDX-License-Identifier: GPL-3.0

import { Inject, Injectable } from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { SchedulerRegistry } from '@nestjs/schedule';
import {
  NodeConfig,
  BaseFetchService,
  StoreCacheService,
  UnfinalizedBlocksService,
  ProjectService,
} from '@subql/node-core';
import { SubstrateDatasource, SubstrateBlock } from '@subql/types';
import { BlockchainService } from '../blockchain.service';
import { SubqueryProject } from '../configure/SubqueryProject';
import { ISubstrateBlockDispatcher } from './blockDispatcher/substrate-block-dispatcher';
import { SubstrateDictionaryService } from './dictionary/substrateDictionary.service';
import { RuntimeService } from './runtime/runtimeService';

@Injectable()
export class FetchService extends BaseFetchService<
  SubstrateDatasource,
  ISubstrateBlockDispatcher,
  SubstrateBlock
> {
  constructor(
    nodeConfig: NodeConfig,
    @Inject('IProjectService')
    projectService: ProjectService<SubstrateDatasource>,
    @Inject('ISubqueryProject') project: SubqueryProject,
    @Inject('IBlockDispatcher')
    blockDispatcher: ISubstrateBlockDispatcher,
    dictionaryService: SubstrateDictionaryService,
    @Inject('IUnfinalizedBlocksService')
    unfinalizedBlocksService: UnfinalizedBlocksService<SubstrateBlock>,
    eventEmitter: EventEmitter2,
    schedulerRegistry: SchedulerRegistry,
    private runtimeService: RuntimeService,
    storeCacheService: StoreCacheService,
    @Inject('IBlockchainService') blockchainService: BlockchainService,
  ) {
    super(
      nodeConfig,
      projectService,
      project.network,
      blockDispatcher,
      dictionaryService,
      eventEmitter,
      schedulerRegistry,
      unfinalizedBlocksService,
      storeCacheService,
      blockchainService,
    );
  }

  protected async initBlockDispatcher(): Promise<void> {
    await this.blockDispatcher.init(
      this.resetForNewDs.bind(this),
      this.runtimeService,
    );
  }

  protected async preLoopHook({
    startHeight,
  }: {
    startHeight: number;
  }): Promise<void> {
    await this.runtimeService.init(
      startHeight,
      this.getLatestFinalizedHeight(),
    );
  }
}
