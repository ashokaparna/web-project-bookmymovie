'use strict';
//initiate mongoose
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var User = new Schema({
    username :{
        type:String,
        required:'Please enter your username.',
        unique:true
    },
    email:{
        type:String,
        required:'Please enter your email.',
        unique:true
    },    
    password:{
        type:String,
        required:'Please enter your password.'
    },
    phoneno:{
        type:String,
        required:'Please enter your phone number.'
    },
    address: {
        type: String,
        required: 'Please enter your address'
    }

});
// exports model
module.exports = mongoose.model('User', User);

