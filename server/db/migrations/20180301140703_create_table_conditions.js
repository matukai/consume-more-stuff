exports.up = function(knex, Promise) {
  return knex.schema.createTable('conditions', function (table) {
    table.increments();
    table.enu('condition',['used','worn','fair','good','new']).notNullable();
    table.integer('item_id').notNullable();
    table.foreign('item_id').references('items.id');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('conditions');
};