# Remix Jest Line Numbers bug

See: <https://github.com/remix-run/remix/issues/3105>

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

Observe how the line numbers are off in the test failure message in `remix.test.ts`.

![image](https://user-images.githubusercontent.com/225712/171851111-de753cf3-2060-4394-b592-fbc9fb4871cc.png)

Patch `@remix-run/node`:

```
npm run patch-remix
```

Run the tests again and now the line numbers are correct.

![image](https://user-images.githubusercontent.com/225712/171851169-6197e219-13f9-4423-a103-c7aa3ef913c8.png)

The fix is here: <https://github.com/esamattis/remix-jest-line-numbers-bug/blob/master/patches/%40remix-run%2Bnode%2B1.5.1.patch>
