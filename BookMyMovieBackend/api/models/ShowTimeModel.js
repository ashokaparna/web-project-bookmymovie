'use strict';
//initiate mongoose
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ShowTimeSchema = new Schema({
    ShowId : {
        type: String,
        required: true,
        unique:true
    },
    MovieId :{
        type:String,
        required:'kindly enter your Username.'
    },
    FromTime:{
        type:String,
        required:'kindly enter your email.'
    }  
   
    

});
// exports model
module.exports = mongoose.model('tblShowTime', ShowTimeSchema);