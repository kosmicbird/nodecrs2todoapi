const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');


// Todo.remove({}).then((result) => {
//     console.log(result);
// });

// Todo.findOneAndRemove
// Todo.findByIdAndRemove

Todo.findOneAndRemove({_id: '5a63841b69cfea0c3ce470c6'}).then((todo) => {
    console.log(todo);
});

// Todo.findByIdAndRemove('5a63838969cfea0c3ce47091').then((todo) => {
//     console.log(todo);
// });