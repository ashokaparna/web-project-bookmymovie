'use strict';
//initiate mongoose
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var User = new Schema({
    // UserId : {
    //     type: String
    //    // unique:true
    // },
    UserName :{
        type:String,
        required:'kindly enter your Username.'
    },
    Email:{
        type:String,
        required:'kindly enter your email.'
    },    
    Password:{
        type:String,
        required:'kindly enter your password.'
    },
    PhoneNo:{
        type:Number,
        required:'kindly enter your phone number.'
    },
    

});
// exports model
module.exports = mongoose.model('User', User);

