const path = require('path');
require('dotenv').config();

const SRC_DIR = path.join(__dirname, '/database');

module.exports = {

  development: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: `${SRC_DIR}/migrations`,
    },
    seeds: {
      directory: `${SRC_DIR}/seeds/development`,
    },
    useNullAsDefault: true,
  },

  test: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: `${SRC_DIR}/migrations`,
    },
    seeds: {
      directory: `${SRC_DIR}/seeds/test`,
    },
    useNullAsDefault: true,
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: `${SRC_DIR}/migrations`,
    },
    seeds: {
      directory: `${SRC_DIR}/seeds/production`,
    },
    useNullAsDefault: true,
  },

};
