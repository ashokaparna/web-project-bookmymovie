


'use strict';

let mongoose = require('mongoose');
require('../models/ShowTimeModel');/**
 * Returns an all users.
 *
 */
let ShowTime = mongoose.model('ShowTime');
exports.showtimeList = function() {
    console.log("");
    ShowTime.aggregate([
       
      
        { '$lookup': { from: 'theatres', localField: Object('theatreId'), foreignField: '_id', as: 'theatreRef'} },
        { '$unwind': '$theatreRef' }
    ]).exec(function (err, docs){
        console.log(JSON.stringify(docs));
    //Use docs here. It will be object so for printing results: 
    const promise =  JSON.stringify(docs);
    return promise;

});   
   
}

exports.list_by_movieName = function(movieName) {
    const promise = ShowTime.find({"movieName": movieName}).exec();
    return promise;
}

exports.list = function() {
    const promise = ShowTime.find().exec();
    return promise;
}


exports.save = function (show) {
    const newshow = new ShowTime(show);
    const promise = newshow.save();
    return promise;
};