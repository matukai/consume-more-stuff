const bookshelf = require('./bookshelf');


class Category extends bookshelf.Model {
  get tableName() {return 'categories'}

  item() {
    return this.hasMany('items')
  }

}


module.exports = Category;