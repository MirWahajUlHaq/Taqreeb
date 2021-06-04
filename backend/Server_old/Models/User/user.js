var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//addded source for social login
var User     = new Schema({
    firstName: {
        type: String,
        default: ''
    },
    lastName: {
        type: String,
        default: ''
    },    
    email: {
        type: String,
        default: '',
    },
    password: {
        type: String,
        default: ''
    },
    status: {
        type: Number,
        default: 1
    },
    role: {
        type: Number,
    },
    created_on: {
        type: Date,
    default: Date.now,
    }
});
var User = mongoose.model('Users', User);
module.exports = User;