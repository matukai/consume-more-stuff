const bookshelf = require('./bookshelf');


class ItemStatus extends bookshelf.Model {
  get tableName() {return 'item_status'}

  item() {
    return this.belongsTo('items', 'item_id')
  }

}


module.exports = ItemStatus;