'use strict';
//initiate mongoose
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var TheatreSchema = new Schema({   
  
    theatreName :{
        type:String,
        required:'kindly enter your theatreName.'
    }
});
// exports model
module.exports = mongoose.model('Theatre', TheatreSchema);