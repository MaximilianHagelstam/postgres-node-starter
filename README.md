# TS Node Starter

The purpose of this repository is to simplify and speed up the process of starting a new Node.js TypeScript project. Some of this quick starts content was inspired or adapted from Microsofts [TypeScript Node Starter](https://github.com/microsoft/TypeScript-Node-Starter/).

## Table of contents:

- [Pre-reqs](#pre-reqs)
- [Getting started](#getting-started)
- [Features](#features)
- [Dependencies](#dependencies)
  - [dependencies](#dependencies)
  - [devDependencies](#devdependencies)
- [Scripts](#scripts)
- [License](#license)

## Pre-reqs

To build and run this app locally you will need to install [Node.js](https://nodejs.org/en/)

## Getting started

1.  Make sure that you have Node.js and npm installed.
2.  Clone this repo using `git clone --depth=1 https://github.com/MaximilianHagelstam/ts-node-starter.git <YOUR_PROJECT_NAME>`
3.  Move to the appropriate directory: `cd <YOUR_PROJECT_NAME>`.
4.  Make a `.env` it the root of your project as per `.env.example`.
5.  Run `yarn install` to install dependencies.
6.  Run `yarn build` to compile the example app.
7.  Run `yarn start` to start the example app.

## Features

- Express.js server
- PostgreSQL connectivity
- Sequelize ORM
- Jest and Supertest setup
- ESLint linting
- Prettier formatting
- Winston logger
- Yarn

## Scripts

| Script              | Description                                  |
| ------------------- | -------------------------------------------- |
| `yarn start`        | Run compiled JavaScript build in production  |
| `yarn run dev`      | Run TypeScript source code in development    |
| `yarn build`        | Compile TypeScript source code to JavaScript |
| `yarn test`         | Run all jest test suites                     |
| `yarn run start-db` | Start PostgreSQL database                    |

## Dependencies

### dependencies

| Package   | Description                                              |
| --------- | -------------------------------------------------------- |
| dotenv    | Loads environment variables from .env file               |
| express   | Node.js web framework                                    |
| winston   | Logging library                                          |
| pg        | PostgreSQL client for Node.js                            |
| sequelize | Node.js ORM                                              |
| pg-hstore | Serializing and deserializing JSON data to hstore format |

### devDependencies

| Package                | Description                                                            |
| ---------------------- | ---------------------------------------------------------------------- |
| @types                 | Dependencies in this folder are `.d.ts` files used to provide types    |
| nodemon                | Utility that automatically restarts node process when it crashes       |
| ts-node                | Enables directly running TS files                                      |
| eslint                 | Linter for JavaScript and TypeScript files                             |
| typescript             | JavaScript compiler/type checker that boosts JavaScript productivity   |
| eslint-plugin-prettier | ESLint plugin for Prettier formatting                                  |
| prettier               | Code formatter                                                         |
| jest                   | Testing library for JavaScript                                         |
| supertest              | HTTP assertion library                                                 |
| ts-jest                | A preprocessor with sourcemap support to help use TypeScript with Jest |

## License

This project is licensed under the terms of the [MIT](https://choosealicense.com/licenses/mit/) license.
