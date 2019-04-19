'use strict';
//initiate mongoose
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ShowTimeSchema = new Schema({
   
    movieName :{
        type:String,
        required:'kindly enter your Username.'
    },
    theatreName :{
    // type: Schema.Types.ObjectId, ref:'Theatre',
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