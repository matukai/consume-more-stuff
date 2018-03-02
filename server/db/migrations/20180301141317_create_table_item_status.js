
exports.up = function(knex, Promise) {
  return knex.schema.createTable('item_status', function (table) {
    table.increments();
    table.enu('status',['published','pending','sold']).notNullable();
    table.integer('item_id').notNullable();
    table.foreign('item_id').references('items.id');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('item_status');
};
