const mongoose = require('mongoose')
const {ObjectId} = mongoose.Schema

const cartSchema = new mongoose.Schema({
    user: {
        type: ObjectId,
        ref:'User',
        required:true
    },
    cartItems: [
        {
            product: {
                type:ObjectId,
                ref:'Product',
                required:true
            },
            price: {
                type:Number,
                required:true
            }
        }
    ]
    
}, {timeStamps:true})



module.exports = mongoose.model("Cart", cartSchema)