const mongoose = require('mongoose');

const ProductScheme = new mongoose.Schema({
    name:{type:String,required:true},
    description:{type:String,required:true},
    price:{type:Number,required:true},
    createAt:{
        type:Date,
        default:Date.now
    }
})

// DB Table configs
module.exports = mongoose.model("Product", ProductScheme)