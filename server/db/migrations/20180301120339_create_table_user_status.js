
exports.up = function(knex, Promise) {
  return knex.schema.createTable('user_status', function (table) {
    table.increments();
    table.string('status').notNullable().defaultTo('active');
    table.integer('user_id').notNullable();
    table.foreign('user_id').references('users.id');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('user_status');
};
