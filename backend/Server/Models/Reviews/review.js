var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Review = new Schema({
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Products'
    },
    vendorId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users'
    },
    reviewerName: {
        type: String,
        default: ''
    },
    review: {
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
var Review = mongoose.model('Reviews', Review);
module.exports = Review;