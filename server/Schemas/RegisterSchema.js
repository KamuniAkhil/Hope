const mongoose = require('mongoose');

//creating schema to register as trustee

const registerSchema = new mongoose.Schema({
    trustname: {
        type: String,
        required: true,
    },
    organiser: {
        type: String,
        required: true,
    },
    residents:{
        type: Number,
        requried: true,
    },
    type:{
        type:String,
        requried:true,
    },
    location:{
        type: String,
        required: true,
    },
    description:{
        type: String,
        required: false,
    },
    date:{
        type:Date,
        default:Date.now,
    }

})

module.exports = mongoose.model('Register', registerSchema );