# Program-Library

Progress through a program library. Peruse programs and sections within programs!

## Usage

These instructions will get you a copy of this project on your local machine up and running for development and testing purposes.

### Installation Overview

1. `git clone`
1. `npm install`
1. create .env file in root folder
1. seed PostgreSQL database
1. `npm run start:dev`

### Environmental Variables

Create a .env file in the root directory. Open the .env file and include the following:

```
NODE_ENV='development'
PORT=<insert your port number here>
DATABASE_URL=<insert your database url here>
```

### Database Setup

After installing dependencies and setting up the database url in the .env file, run the following commands:

1. `npx knex migrate:latest` to perform database migrations
1. `npx knex seed:run` to seed the database

## Requirements

  - material-ui/cor": ^3.9.2
  - axios: ^0.18.0,
  - body-parser: ^1.18.3,
  - dotenv: ^6.2.0,
  - express: ^4.16.4,
  - knex: ^0.16.3,
  - objection: ^1.6.3,
  - pg: ^7.8.2,
  - prop-types: "^15.6.2",
  - react: ^16.7.0,
  - react-dom: ^16.7.0,
  - react-hot-loader: ^4.6.3,
  - react-router-dom: ^4.3.1

## Development
  - @babel/cli: ^7.2.3,
  - @babel/core: ^7.2.2,
  - @babel/node: ^7.2.2,
  - @babel/preset-env: ^7.3.1,
  - @babel/preset-react: ^7.0.0,
  - babel-loader: ^8.0.5,
  - eslint: ^5.12.1,
  - eslint-config-airbnb: ^17.1.0,
  - eslint-plugin-import: ^2.15.0,
  - eslint-plugin-jsx-a11y: ^6.2.0,
  - eslint-plugin-react: ^7.12.4,
  - nodemon: ^1.18.9,
  - uglifyjs-webpack-plugin: ^2.1.1,
  - webpack: ^4.29.0,
  - webpack-cli: ^3.2.1,
  - webpack-dev-middleware: ^3.5.1,
  - webpack-hot-middleware: ^2.24.3
