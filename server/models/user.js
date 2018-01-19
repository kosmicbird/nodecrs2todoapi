const mongoose = require('mongoose');

const User = mongoose.model('User', {
    email: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    }
});


let newUser = new User({
    email: '  kwinston@gmail.com  '
});

// newUser.save().then((doc) => {
//     console.log('Saved user', doc)
// }, (e) => {
//     console.log('Unable to save user', e);
// });

module.exports = {
    User
}