var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Room     = new Schema({
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
    roomName: {
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
var Room = mongoose.model('Rooms', Room);
module.exports = Room;