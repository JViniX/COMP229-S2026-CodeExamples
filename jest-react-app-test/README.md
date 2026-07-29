# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Testing Setup (Jest + React Testing Library)

The test command was configured to run Jest with coverage:

```bash
npm run test
```

This runs:

```bash
jest --coverage
```

### What was added for Unit Testing

1. **Jest configuration** in `jest.config.cjs`
	- Uses `jsdom` test environment for React component tests.
	- Uses `babel-jest` to transform `.js`/`.jsx` files.
	- Maps CSS imports to `identity-obj-proxy`.
	- Maps static asset imports (images/svg/etc.) to a file mock.

2. **Babel configuration** in `babel.config.cjs`
	- `@babel/preset-env` targeting current Node for Jest.
	- `@babel/preset-react` to parse and transform JSX.

3. **Jest setup file** in `src/setupTests.js`
	- Imports `@testing-library/jest-dom` to enable matchers like `toBeInTheDocument()`.

4. **Static file mock** in `src/__mocks__/fileMock.js`
	- Prevents test failures when components import image/svg files.

### Dev dependencies added for testing

```bash
npm install -D jest babel-jest jest-environment-jsdom @babel/core @babel/preset-env @babel/preset-react @testing-library/react @testing-library/jest-dom identity-obj-proxy
```

### Run tests

```bash
npm run test
```

If everything is set up correctly, Jest should execute the test suite and produce a coverage report.
