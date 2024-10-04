The following command runs fine with no problems.
```sh
bun run dev
```

The following unit test fails due to a failed import
```sh
bun run test
```

results in the following error:
To run:
```sh
 FAIL  src/index.spec.ts
  ● Test suite failed to run

    ReferenceError: Bun is not defined

    > 1 | import { createBunWebSocket } from 'hono/bun'
        | ^
      2 |
      3 | describe('index', () => {
      4 |   it("should not FAIL", () => {

      at Object.<anonymous> (node_modules/hono/dist/cjs/adapter/bun/ssg.js:26:19)
      at Object.<anonymous> (node_modules/hono/dist/cjs/adapter/bun/index.js:29:18)
      at Object.require (src/index.spec.ts:1:1)
```

Commenting out this line in 
`node_modules/hono/dist/cjs/adapter/bun/index.js:29:18`

```
...
28: var import_serve_static = require("./serve-static");
29: // var import_ssg = require("./ssg");
30: var import_websocket = require("./websocket");
31: var import_conninfo = require("./conninfo");
...
```

Causes the test to pass.

What do I need to add to my configuration to make my test pass?

Is this a bug in hono?