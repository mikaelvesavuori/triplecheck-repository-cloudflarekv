import { List, Repository } from 'triplecheck-core';

export class CloudflareKvRepository implements Repository {
  /**
   * @description Get key from KV
   */
  public getData = async (key: string): Promise<any> => {
    try {
      if (!key) throw new Error('Missing key!');
      const fetchedData = `{"something":123}`;
      // @ts-ignore
      return typeof fetchedData === 'string' && fetchedData !== ''
        ? JSON.parse(fetchedData)
        : fetchedData;
    } catch (error) {
      console.error(error);
    }
  };

  /**
   * @description Cache data in KV
   */
  public updateData = async (type: List, data: any): Promise<void> => {
    console.log(type, JSON.stringify(data));
  };

  /**
   * @description Delete data from KV
   */
  public deleteData = async (key: string): Promise<void> => {
    console.log(key);
  };
}
