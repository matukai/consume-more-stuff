exports.up = function(knex, Promise) {
  return knex.schema.createTable('categories', function (table) {
    table.increments();
    table.enu('category',['vehicles','appliances','computers','furniture']).notNullable();
    table.integer('item_id').notNullable();
    table.foreign('item_id').references('items.id');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('categories');
};