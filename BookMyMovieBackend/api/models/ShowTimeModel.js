'use strict';
//initiate mongoose
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ShowTimeSchema = new Schema({
   
    movieId :{
        type:String,
        required:'kindly enter your Username.'
    },
    theatreId :{
        type:String,
        required:'kindly enter your Username.'
    },
    showTime:{
        type:String,
        required:'kindly enter showTime.'
    },
    seats:{
        type:String,
        required:'kindly enter showTime.'
    }

});
// exports model
module.exports = mongoose.model('ShowTime', ShowTimeSchema);