# Quiz api

Simple quiz application api

## Setup

- Copy **.env.example** to **.env** and update the variables

## Running the server

- Run `docker-compose up -d` to start all the services (the api server too)
- Run `npx knex migrate:latest` to run migration
- Run `npx knex seed:run` to seed data

**Note**: You don't need `npx` if you have **knex** globally installed.

## Available scripts

### `yarn dev`

- Starts the dev server

### `yarn build`

- Compiles the source code. Converts ts to js.

### `yarn start`

- Runs the build version
