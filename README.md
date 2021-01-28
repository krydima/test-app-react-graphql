![React checks](https://github.com/krydima/test-app-react-graphql/workflows/React%20checks/badge.svg) ![Github pages publisher](https://github.com/krydima/test-app-react-graphql/workflows/Github%20pages%20publisher/badge.svg?branch=main) [![codecov](https://codecov.io/gh/krydima/test-app-react-graphql/branch/main/graph/badge.svg)](https://codecov.io/gh/krydima/test-app-react-graphql)

[Demo](https://krydima.github.io/test-app-react-graphql)

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# generate d.ts for css modules
$ npm run generate-types-for-css

# storybook
$ npm run storybook

# build
$ npm run build
```

## Linting

```bash
# lint all ts files
$ npm run lint
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests (open cypress)
$ npm run test:e2e:open

# e2e tests run in docker
$ npm run test:e2e:run:docker
```

## Type check

```bash
# typescript check
$ npm run type-check
```

## Deploying

Deployment to "github pages" will start automatically after committing to main branch. (github workflows)
