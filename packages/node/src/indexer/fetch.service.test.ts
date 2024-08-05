// Copyright 2020-2024 SubQuery Pte Ltd authors & contributors
// SPDX-License-Identifier: GPL-3.0

import { ApiPromise, HttpProvider } from '@polkadot/api';
import { FetchService } from '@subql/node-core';
import { createCachedProvider } from './x-provider/cachedProvider';

const POLKADOT_ENDPOINT = 'https://rpc.polkadot.io';

// TODO move these tests to Blockchain service

describe('FetchService', () => {
  let fetchService: FetchService<any, any, any>;
  let api: ApiPromise;

  beforeAll(async () => {
    // Use HTTP where possible to avoid cleanup issues
    api = await ApiPromise.create({
      provider: createCachedProvider(new HttpProvider(POLKADOT_ENDPOINT)),
    });

    fetchService = new FetchService(
      null as any, // NodeConfig
      null as any, // ProjectService
      {} as any, // Project
      null as any, // BlockDispatcher,
      null as any, // DictionaryService
      {
        registerFinalizedBlock: () => {
          /* Nothing */
        },
      } as any, // UnfinalizedBlocks
      null as any, // EventEmitter
      null as any, // SchedulerRegistry
      null as any, // StoreCacheService
      null as any, // BlockchainService
    ) as any;
  }, 10000);

  afterAll(async () => {
    await api.disconnect();
  });

  it('can get the finalized height', async () => {
    const header = await (fetchService as any).getFinalizedHeader();
    expect(header.blockHeight).toBeGreaterThan(0);
  });

  it('can get the best height', async () => {
    const height = await (fetchService as any).getBestHeight();
    expect(height).toBeGreaterThan(0);
  });

  it('can get the chain interval', async () => {
    const interval = await (fetchService as any).getChainInterval();
    expect(interval).toEqual(5000);
  });
});
