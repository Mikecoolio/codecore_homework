// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

  development: {
    client: 'pg',
    connection: {
      database: 'super-team-picker'
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
