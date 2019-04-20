'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var OrderSchema = new Schema({
   
    userid :{
        type:String,
        required:'User Id is madatory.'
    },
    theatername:{
        type:String,
        required:'Theater name is mandatory.'
    },
    moviename:{
        type:String,
        required:'Movie name is mandatory.'
    },
     showtime:{
        type:String,
        required:'Show time is mandatory.'
    },
    noofseats:{
        type:Number,
        required:'Number of seats are mandatory'
    },
    totalamount:{
        type: Number,
        required:'kindly enter number of seats.'
    },
    creationtime:{
        type: String,
        required:'kindly enter creation time.'
    }
    
});
// exports model
module.exports = mongoose.model('Orders', OrderSchema);
