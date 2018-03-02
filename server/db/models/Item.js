const bookshelf = require('./bookshelf');


class Item extends bookshelf.Model {
  get tableName() {return 'items'}
  get hasTimestamps() {return true}

  user() {
    return this.belongsTo('users', 'user_id')
  }

  condition() {
    return this.hasOne('conditions', 'item_id')
  }

  category() {
    return this.hasOne('categories', 'item_id')
  }

  itemStatus() {
    return this.hasOne('item_status', 'item_id')
  }

}


module.exports = Item;