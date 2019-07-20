## Description

WIP Nestjs template with Typescript, TypeORM, GraphQL, Apollo and OpenAPI Swagger.

## Create migrations
yarn migration:generate -- -n NameOfMigration

## Run all pending migrations
yarn migration:run

## Revert
yarn migration:revert

## Push db update to upstream *** DO NOT RUN BEFORE CHECKING IN WITH LEAD DEV ***
yarn migration:push // TODO - env config for what env push is going to

## Installation

```bash
$ yarn
```

## Running the app

```bash
# development
$ yarn start

# watch mode
$ yarn start:dev

# production mode
$ yarn start:prod
```

## Test

```bash
# unit tests
$ yarn test

# e2e tests
$ yarn test:e2e

# test coverage
$ yarn test:cov
```