'use strict';
//initiate mongoose
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ReviewSchema = new Schema({

    userid: {
        type: String,
        required: 'kindly enter your Username.'
    },
    movieid: {
        type: String,
        required: 'kindly enter movie id'
    },
    mname: {
        type: String,
        required: 'kindly enter movie name.'
    },
    desc: {
        type: String,
        required: 'kindly enter desc.'
    },
    date: {
        type: String,
        required: 'kindly enter date.'
    },

});
// exports model
module.exports = mongoose.model('Reviews', ReviewSchema);