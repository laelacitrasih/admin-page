const { getDatabase } = require('../config/mongodb')
const mongodb = require('mongodb')

class Movie {
  static find() {
    return getDatabase().collection('movies').find().toArray()
  }

  static findOne(id) {
    return getDatabase().collection('movies').findOne({_id: new mongodb.ObjectID(id)})
  }

  static create(obj) {
    return getDatabase().collection('movies').insertOne(obj)
  }

  static updateOne(id, updateDoc) {
    const filterId = {_id: new mongodb.ObjectID(id)}
    return getDatabase().collection('movies').updateOne(filterId, {$set: updateDoc})
  }

  static deleteOne(id) {
    return getDatabase().collection('movies').deleteOne({_id: new mongodb.ObjectID(id)})
  }
}


module.exports = Movie