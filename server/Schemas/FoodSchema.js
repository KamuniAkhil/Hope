const mongoose = require('mongoose');

//creating foodcard schema

const FoodSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    contact:{
        type:Number,
        required:true,
        minength:10,
        maxlength:10
    },
    items:{
        type:String,
        required: false,
    },
    quantity:{
        type: Number,
        required: false,
    },
    address:{
        type:String,
        required: true,
    },
    description:{
        type:String,
        required:false,
    },
    date:{
        type:Date,
        default:Date.now,
    }
})

module.exports = mongoose.model('Donation',FoodSchema);