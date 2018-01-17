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
   
    // deleteMany
    // myDB.collection('Todos').deleteMany({text: 'eat lunch'}).then((result) => {
    //     console.log(result);
    // });
   
    // deleteOne
    // myDB.collection('Todos').deleteOne({text: 'eat lunch'}).then((result) => {
    //     console.log(result);
    // })
   
    // findOneAndDelete
    // myDB.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
    //     console.log(result);
    // })


    myDB.collection('Users').deleteMany({name: 'Moni'}).then((result) => {
        console.log(result);
    })

    myDB.collection('Users').findOneAndDelete({_id: new ObjectID('5a5e388afe86056ab2112da5')}).then((result) => {
        console.log(JSON.stringify(result, undefined, 2));
    })


    // db.close();
});