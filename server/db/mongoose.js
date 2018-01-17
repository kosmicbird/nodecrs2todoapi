const mongoose = require('mongoose');

mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://localhost:27017/TodoApp', {
    useMongoClient: true
});


module.exports = {
    mongoose
};