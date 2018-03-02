exports.up = function(knex, Promise) {
  return knex.schema.createTable('items', function (table) {
    table.increments();
    table.string('name').notNullable();
    table.decimal('price');
    table.string('model');
    table.string('dimensions');
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
    table.text('notes');
    table.integer('user_id').notNullable();
    table.foreign('user_id').references('users.id');
    table.string('image');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('items');
};
