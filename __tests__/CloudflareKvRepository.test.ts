import { CloudflareKvRepository } from '../src/CloudflareKvRepository';

import { tests } from '../__testdata__/tests';

jest.mock('../src/CloudflareKvRepository');

describe('Success cases', () => {
  const kv = new CloudflareKvRepository();

  test('It should get data', async () => {
    const data = await kv.getData('something');
    expect(data).toMatchObject({ something: 123 });
  });

  test('It should put data', async () => {
    const spy = jest.spyOn(kv, 'updateData');
    kv.updateData('tests', tests);
    expect(spy).toHaveBeenCalled();
  });

  test('It should delete data', async () => {
    const spy = jest.spyOn(kv, 'deleteData');
    kv.deleteData('some-key');
    expect(spy).toHaveBeenCalled();
  });
});
