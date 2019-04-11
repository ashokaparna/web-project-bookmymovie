'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var OrderSchema = new Schema({
    OrderId : {
        type: String,
        required: true,
        unique:true
    },
    UserId :{
        type:String,
        required:'kindly select user.'
    },
    MovieId:{
        type:String,
        required:'kindly select movie.'
    },
     CreatedAt:{
        type:Date,
        required:'kindly enter creation date.'
    },
    NoOfSeats:{
        type:Number,
        required:'kindly select seats.'
    },
    TotalAmount:{
        type: Number,
        required:'kindly enter number of seats..'
    },
});
// exports model
module.exports = mongoose.model('Orders', OrderSchema);
