
exports.up = (knex, Promise) => Promise.all([
  knex.schema.createTable('programs', (table) => {
    table.increments('id').primary();
    table.string('name').notNullable().unique();
    table.string('description').notNullable();
  }),
  knex.schema.createTable('sections', (table) => {
    table.increments('id').primary();
    table.string('name').notNullable().unique();
    table.string('description').notNullable();
    table.string('overview_image').notNullable();
    table.integer('order_index').notNullable();
    table.string('html_content').notNullable();
    table.integer('programs_id').references('programs.id');
  }),
]);

exports.down = (knex, Promise) => Promise.all([
  knex.schema.dropTable('sections'),
  knex.schema.dropTable('programs'),
]);
