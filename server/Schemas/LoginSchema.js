
// Importing
const mongoose = require('mongoose');

// Creating schemas
const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email: {
        type: String,
        required: true,
        unique:true,
    },
    password: {
        type: String,
        required: true,
    }
});
// Schemas End

module.exports = mongoose.model('User', userSchema);