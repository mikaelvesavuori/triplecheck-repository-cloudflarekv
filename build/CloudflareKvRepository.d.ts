import { Repository, List } from 'triplecheck-core';
export declare function createCloudflareKvRepository(): CloudflareKvRepository;
declare class CloudflareKvRepository implements Repository {
    getData: (key: string) => Promise<any>;
    updateData: (type: List, data: any) => Promise<void>;
    deleteData: (key: string) => Promise<void>;
}
export {};
