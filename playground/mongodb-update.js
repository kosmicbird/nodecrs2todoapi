// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server')
    }
    console.log('Connected to MongoDB server');

    const myDB = db.db('TodoApp');

    // myDB.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID('5a5ea2ae69cfea0c3ce31fbd')
    // }, {
    //     $set: {
    //         completed: true
    //     } 
    // }, {
    //     returnOriginal: false
    // }).then((result) => {
    //     console.log(result);
    // })

    myDB.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5a5eb46ead66b96e8730af5f')
    }, {
        $set: {
            name: 'Moni'
        },
        $inc: {
            age: -3
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    })

    // db.close();
});