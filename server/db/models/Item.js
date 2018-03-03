const bookshelf = require('./bookshelf');


class Item extends bookshelf.Model {
  get tableName() {return 'items'}
  get hasTimestamps() {return true}

  user() {
    return this.belongsTo('users', 'user_id')
  }

  condition() {
    return this.hasOne('conditions', 'condition_id')
  }

  category() {
    return this.belongsTo('categories', 'category_id')
  }

  itemStatus() {
    return this.belongsTo('item_status', 'item_status_id')
  }

}


module.exports = Item;