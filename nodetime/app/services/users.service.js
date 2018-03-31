const mongodb = require('../mongodb');
const conn = mongodb.connection;
const ObjectId = mongodb.ObjectId;

module.exports = {
    readAll: _readAll,
    readById: _readById,
    create: _create,
    update: _update,
    delete: _delete
}


function _readAll() {
   return conn.db().collection('users').find()
    .map(users => {
        return users
    })
    .toArray();
}

function _readById(id) {
    return conn.db().collection('users').find({_id: new ObjectId(id)}).limit(1)
    .next()
}

function _create(body) {
    return conn.db().collection('users').insertOne(body)
    .then(() => Promise.resolve())
        
}

function _update() {

}

function _delete() {

}