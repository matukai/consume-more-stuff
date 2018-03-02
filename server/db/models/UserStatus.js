const bookshelf = require('./bookshelf');


class UserStatus extends bookshelf.Model {
  get tableName() {return 'user_status'}


  user() {
    return this.belongsTo('users', 'user_id')
  }

}

module.exports = UserStatus;