var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var user = new Schema({
    name: {
        type: Number,
        default: 0
    }
});
module.exports = mongoose.model('user', user);