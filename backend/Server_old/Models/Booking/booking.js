var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Booking = new Schema({
    startDate: {
        type: String,
        default: ''
    },
    endDate: {
        type: String,
        default: ''
    },
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Products'
    },
    transactionID: {
        type: String,
        default: ''
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users'
    },
    vendorId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users'
    },
    streetAddress:{
        type:String,
        default:''
    },
    city:{
        type:String,
        default:''
    },
    state:{
        type:String,
        default:''
    },
    zip:{
        type:String,
        default:''
    },
    country:{
        type:String,
        default:''
    },
    price: {
        type: String,
        default: ''
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
var Booking = mongoose.model('Bookings', Booking);
module.exports = Booking;