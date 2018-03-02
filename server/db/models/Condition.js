const bookshelf = require('./bookshelf');


class Condition extends bookshelf.Model {
  get tableName() {return 'conditions'}

  item() {
    return this.belongsTo('items', 'item_id');
  }

}


module.exports = Condition;