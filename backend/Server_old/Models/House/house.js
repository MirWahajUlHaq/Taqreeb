var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var House     = new Schema({
    houseName: {
        type: String,
        default: ''
    },
    images: {
        type: []
    },    
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Users",
        default: "",
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
var House = mongoose.model('Houses', House);
module.exports = House;