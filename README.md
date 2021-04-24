# triplecheck-repository-cloudflarekv

## TripleCheck: Cloudflare KV database repository

Database utility for using Cloudflare KV with TripleCheck broker. It implements the repository base at [triplecheck-core](https://github.com/mikaelvesavuori/triplecheck-core).

## Instructions

In your `triplecheck-broker` implementation, do a regular import for `triplecheck-repository-cloudflarekv` and pass the repository to the broker. In a Cloudflare Workers context, and implementation could look like:

```TypeScript
import { CloudflareKvRepository } from 'triplecheck-repository-cloudflarekv';
import { TripleCheckBroker } from 'triplecheck-broker';

async function handler(req: any) {
  const repository = new CloudflareKvRepository();

  // We need to pass a cleaned request object, body/payload and repository to Triplecheck
  const { body, method } = req;
  const { pathname, search } = new URL(req.url);
  const payload: any = body ? await req.json() : null;

  const request = {
    method,
    pathname,
    search
  };

  const { responseData, status, headers } = await TripleCheckBroker(
    request,
    payload,
    repository
  );

  // Handle CORS if you need
  const headers = new Headers();
  headers.set('Access-Control-Allow-Origin', '*');
  headers.set('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
  headers.set('Access-Control-Allow-Headers', '*');

  return new Response(JSON.stringify(responseData), { status, headers });
}

addEventListener('fetch', (event) => event.respondWith(handler(event.request)));
```
