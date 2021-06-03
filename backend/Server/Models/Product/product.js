var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Product = new Schema({
    productName: {
        type: String,
        default: ''
    },
    productImage: {
        type: String,
        default: ''
    },
    productPrice: {
        type: Number,
        default: ''
    },
    description: {
        type: String,
        default: ''
    },
    categoryId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Categories'
    },
    vendorId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users'
    },
    status: {
        type: Number,
        default: 0
    },
    created_on: {
        type: Date,
    default: Date.now,
    },
    
});
var Product = mongoose.model('Products', Product);
module.exports = Product;