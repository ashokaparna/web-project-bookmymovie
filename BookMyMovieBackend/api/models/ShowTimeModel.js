'use strict';
//initiate mongoose
var mongoose = require('mongoose');
var Schema = mongoose.Schema;



var ShowTimeSchema = new Schema({
   
    movieName :{
        type:String,
        required:'kindly enter your movie name.'
    },
    
    theatreName :{
        type:String,
        required:'kindly enter your theatre name.'
    },
   // theatreId :{type:mongoose.Schema.Types.ObjectId, ref:"theatreModel"},
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