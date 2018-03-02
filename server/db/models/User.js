const bookshelf = require('./bookshelf');

class User extends bookshelf.Model {
  get tableName() {return 'users'}
  get hasTimestamps() {return true}

  item() {
    return this.hasMany('items', 'user_id')
  }

  userStatus() {
    return this.hasOne('user_status', 'user_id')
  }

}


module.exports = User;