/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = function(knex) {
    return knex.schema.createTable('cohorts', table => {
      table.primary('id');
      table.increments('id');
      table.string('member');
      table.string('name');
      table.text('imageUrl');
    })
  };
  
  
  
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
  exports.down = function(knex) {
    return knex.schema.dropTable('cohorts');
  };
  