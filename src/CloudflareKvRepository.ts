declare var TRIPLECHECK: any;

import { Repository, List } from 'triplecheck-core';

/**
 * @description The CloudflareKvRepository allows us to run basic database operations on Cloudflare KV.
 * The business logic itself is encapsulated in the TripleCheck broker.
 * Notice how we are using `TRIPLECHECK` as the namespace.
 */
export class CloudflareKvRepository implements Repository {
  /**
   * @description Get data for the provided key.
   */
  public getData = async (key: string): Promise<any> => {
    const fetchedData = await TRIPLECHECK.get(key);
    return typeof fetchedData === 'string' && fetchedData !== ''
      ? JSON.parse(fetchedData)
      : fetchedData;
  };

  /**
   * @description Put data at the provided key.
   */
  public updateData = async (type: List, data: any): Promise<void> => {
    await TRIPLECHECK.put(type, JSON.stringify(data));
  };

  /**
   * @description Delete data for type and service.
   */
  public deleteData = async (key: string): Promise<void> => {
    await TRIPLECHECK.delete(key);
  };
}
