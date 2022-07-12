/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
      return knex.schema.table('cohorts', table => {
        table.string('logo_url');
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    table.dropColumn('logo_url');
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
