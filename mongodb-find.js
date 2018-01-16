// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server')
    }
    console.log('Connected to MongoDB server');


    // const myDB = db.db('TodoApp');
    // myDB.collection('Todos').find({
    //     _id: new ObjectID('5a5e36498d36066aadcc2658')
    // }).toArray().then((docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log('Unable to fetch todos', err);
    // });

    const myDB = db.db('TodoApp');
    myDB.collection('Todos').find().count().then((count) => {
        console.log(`Todos count: ${count}`);
    }, (err) => {
        console.log('Unable to fetch todos', err);
    });

    myDB.collection('Users').find().count().then((count) => {
        console.log(`Users count: ${count}`);
    }, (err) => {
        console.log('Unable to fetch users', err);
    });

    myDB.collection('Users').find({name: 'Moni'}).count().then((docs) => {
        console.log(`Users named Moni: ${docs}`);
    }, (err) => {
        console.log('Unable to fetch users', err);
    });
    // db.close();
});