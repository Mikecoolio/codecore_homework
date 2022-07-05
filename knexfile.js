// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './dev.sqlite3'
    },
  migrations: {
    table: "migrations",
    directory: "db/migrations"
  },
  seeds : {
    seeds: 'db/seeds'
  }
  }
};
