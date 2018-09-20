import { InitParams, Param, Item } from './types';
export declare const prepareUserAgent: (userAgent: string, appName: string) => string;
export declare const getDefaultInitParams: () => InitParams;
export declare const resolveParam: <T>(value: Param<T>) => T;
export declare const prepareItems: (items: Item[], trackId: any, time: any) => Item[];
export declare const getBatches: (items: Item[], batchSize: number) => Item[][];
export declare const sendBatches: ([batch, ...others]: Item[][], failedItems?: Item[]) => Promise<Item[]>;
