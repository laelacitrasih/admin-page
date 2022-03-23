const { getDatabase } = require('../config/mongodb')
const mongodb = require('mongodb')

class Admin {
  static find() {
    return getDatabase().collection('admins').find().toArray()
  }

  static findOne(id) {
    return getDatabase().collection('admins').findOne({_id: new mongodb.ObjectID(id)})
  }

  static create(obj) {
    return getDatabase().collection('admins').insertOne(obj)
  }

  static updateOne(id, updateDoc) {
    const filterId = {_id: new mongodb.ObjectID(id)}
    return getDatabase().collection('admins').updateOne(filterId, {$set: updateDoc})
  }

  static deleteOne(id) {
    return getDatabase().collection('admins').deleteOne({_id: new mongodb.ObjectID(id)})
  }
}


module.exports = Admin