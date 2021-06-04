var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Category = new Schema({
    categoryName: {
        type: String,
        default: ''
    },
    status: {
        type: Number,
        default: 1
    },
    created_on: {
        type: Date,
    default: Date.now,
    },
    
});
var Category = mongoose.model('Categories', Category);
module.exports = Category;