const { MongoClient } = require('mongodb');

let dbConnection
const url = 'mongodb://localhost:27017/Bookstore'

module.exports = {
    connectToDb: (cb) => {
        MongoClient.connect(url)
        .then((client) => {
            dbConnection = client.db()
            return cb()
        })
        .catch((err) => {
            Console.log(err)
            return cb(err)
        })
    },

    getDb: () => { dbConnection}
}



