# Remix Jest Line Numbers bug

Reproduce

```
git clone https://github.com/esamattis/remix-jest-line-numbers-bug.git
cd remix-jest-line-numbers-bug
npm ci
```

and run the tests

```
npm test
```

Observe how the line numbers are of the test failure message in `remix.test.ts`.

Path `@remix-run/node`:

```
npm run patch-remix
```

Run the tests again and now the line numbers are correct.

The fix is here: <https://github.com/esamattis/remix-jest-line-numbers-bug/blob/master/patches/%40remix-run%2Bnode%2B1.5.1.patch>
