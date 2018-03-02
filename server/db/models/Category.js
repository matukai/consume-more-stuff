const bookshelf = require('./bookshelf');


class Category extends bookshelf.Model {
  get tableName() {return 'categories'}

  item() {
    return this.belongsTo('items', 'item_id')
  }

}


module.exports = Category;