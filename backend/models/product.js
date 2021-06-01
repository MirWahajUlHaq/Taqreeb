const mongoose = require('mongoose')
const {ObjectId} = mongoose.Schema

const productSchema = new mongoose.Schema({
    name: {
        type:String,
        trim:true,
        required:true,
        maxlength:32
    },
    slug: {
        type:String,
        required:true,
        unique:true
    },
    price:{
        type:Number,
        trim:true,
        required:true,
        maxlength:32
    },
    description: {
        type:String,
        required:true,
         maxlength:2000
    },
    offer: {
        type:Number
    },
    productPictures:[   
        {img:{type:String }}
    ],
    reviews:[
        {userId: {type: mongoose.Schema.Types.ObjectId, ref:'User'},
        review:String
    }
    ],
    quantity: {
        type:Number,
        default:1
    },
    category: {
        type:mongoose.Schema.Types.ObjectId,
        ref:'Category'
    },
    createdBy:{
        type:mongoose.Schema.Types.ObjectId, 
        ref:'User'
    },
    status: {
        type: Number,
        default: 0
    },
    updatedAt: Date,

    
}, {timeStamps:true})



module.exports = mongoose.model("Product", productSchema)