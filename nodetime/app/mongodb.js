const { MongoClient, ObjectId } = require('mongodb')

let _db = null

function connect(url) {
    if (_db !== null) { return Promise.resolve(_db) }

    return MongoClient.connect(url)
        .then(db => _db = db)
}

module.exports = {
    connect,
    connection: { db: () => _db },
    ObjectId
}