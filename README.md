[winston formats](https://github.com/winstonjs/logform#readme)

# playwright-guide-poc


Inside that directory, you can run several commands:
```sh
  npx playwright test
```
Runs the end-to-end tests.
```sh
  npx playwright test --ui
```
Starts the interactive UI mode.
```sh
  npx playwright test --project=chromium
```
Runs the tests only on Desktop Chrome.
```sh
  npx playwright test example
```
Runs the tests in a specific file.
```sh
  npx playwright test --debug
```
Runs the tests in debug mode.
```sh
  npx playwright codegen
```
Auto generate tests with Codegen.

We suggest that you begin by typing:
```sh
    npx playwright test
```
And check out the following files:
  - .\tests\example.spec.ts - Example end-to-end test
  - .\tests-examples\demo-todo-app.spec.ts - Demo Todo App end-to-end tests
  - .\playwright.config.ts - Playwright Test configuration

Visit [info](https://playwright.dev/docs/intro) for more information. ✨
