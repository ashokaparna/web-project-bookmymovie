'use strict';
//initiate mongoose
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ReviewSchema = new Schema({
   
    movieName :{
        type:String,
        required:'kindly enter movie name.'
    },
    userName :{
        type:String,
        required:'kindly enter your Username.'
    },
    description:{
        type:String,
        required:'kindly enter description.'
    },
    date:{
        type:String,
        required:'kindly enter date.'
    },
   
});
// exports model
module.exports = mongoose.model('Review', ReviewSchema);