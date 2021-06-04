var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Item     = new Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Users",
        default: "",
      },
      houseId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Houses",
        default: "",
      },
      roomId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Rooms",
        default: "",
      },
    itemName: {
        type: String,
        default: ''
    },
    description: {
        type: String,
        default: ''
    },
    images: {
        type: []
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
var Item = mongoose.model('Items', Item);
module.exports = Item;