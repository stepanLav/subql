// Copyright 2020-2022 OnFinality Limited authors & contributors
// SPDX-License-Identifier: Apache-2.0

import {OnEvent} from '@nestjs/event-emitter';
import {Interval} from '@nestjs/schedule';
import {
  BestBlockPayload,
  EventPayload,
  IndexerEvent,
  NetworkMetadataPayload,
  ProcessBlockPayload,
  ProcessedBlockCountPayload,
  TargetBlockPayload,
} from '../events';
import {StoreService} from '../indexer';

const UPDATE_HEIGHT_INTERVAL = 6000;

export abstract class BaseMetaService {
  private currentProcessingHeight?: number;
  private currentProcessingTimestamp?: number;
  private bestHeight?: number;
  private targetHeight?: number;
  private networkMeta?: NetworkMetadataPayload;
  private apiConnected?: boolean;
  private usingDictionary?: boolean;
  private lastProcessedHeight?: number;
  private lastProcessedTimestamp?: number;
  private processedBlockCount?: number;
  private _storeService?: StoreService;

  init(_storeService: StoreService): void {
    this._storeService = _storeService;
  }

  get storeService(): StoreService {
    if (this._storeService === undefined) {
      throw new Error(`MetaService failed to get storeService`);
    }
    return this._storeService;
  }

  protected abstract packageVersion: string;

  protected abstract sdkVersion(): {
    name: string;
    version: string;
  };

  getMeta() {
    const {name: sdkName, version} = this.sdkVersion();

    return {
      currentProcessingHeight: this.currentProcessingHeight,
      currentProcessingTimestamp: this.currentProcessingTimestamp,
      targetHeight: this.targetHeight,
      bestHeight: this.bestHeight,
      indexerNodeVersion: this.packageVersion,
      lastProcessedHeight: this.lastProcessedHeight,
      lastProcessedTimestamp: this.lastProcessedTimestamp,
      uptime: process.uptime(),
      processedBlockCount: this.processedBlockCount,
      apiConnected: this.apiConnected,
      usingDictionary: this.usingDictionary,
      [sdkName]: version,
      ...this.networkMeta,
    };
  }

  @Interval(UPDATE_HEIGHT_INTERVAL)
  getTargetHeight(): void {
    if (this.targetHeight === undefined) return;
    this.storeService.storeCache.metadata.set('targetHeight', this.targetHeight);
  }

  @OnEvent(IndexerEvent.BlockProcessing)
  handleProcessingBlock(blockPayload: ProcessBlockPayload): void {
    this.currentProcessingHeight = blockPayload.height;
    this.currentProcessingTimestamp = blockPayload.timestamp;
  }

  @OnEvent(IndexerEvent.BlockProcessedCount)
  handleProcessedBlock(blockPayload: ProcessedBlockCountPayload): void {
    this.processedBlockCount = blockPayload.processedBlockCount;
    this.currentProcessingTimestamp = blockPayload.timestamp;
  }

  @OnEvent(IndexerEvent.BlockTarget)
  handleTargetBlock(blockPayload: TargetBlockPayload): void {
    this.targetHeight = blockPayload.height;
  }

  @OnEvent(IndexerEvent.BlockBest)
  handleBestBlock(blockPayload: BestBlockPayload): void {
    this.bestHeight = blockPayload.height;
  }

  @OnEvent(IndexerEvent.NetworkMetadata)
  handleNetworkMetadata(networkMeta: NetworkMetadataPayload): void {
    this.networkMeta = networkMeta;
  }

  @OnEvent(IndexerEvent.ApiConnected)
  handleApiConnected({value}: EventPayload<number>): void {
    this.apiConnected = !!value;
  }

  @OnEvent(IndexerEvent.UsingDictionary)
  handleUsingDictionary({value}: EventPayload<number>): void {
    this.usingDictionary = !!value;
  }
}
