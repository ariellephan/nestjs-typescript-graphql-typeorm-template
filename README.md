## Description

WIP Nestjs template with Typescript, TypeORM, GraphQL, Apollo and OpenAPI Swagger.

## REST Swagger
/api

## GraphQL
/graphql

1. Do model change in entity.ts and use migration to push changes to db 
2. Update .graphql and run yarn type to update types 
3. Schema first as decorator for type-graphql does not play well with TypeORM atm
4. Possible alternative: Prisma

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