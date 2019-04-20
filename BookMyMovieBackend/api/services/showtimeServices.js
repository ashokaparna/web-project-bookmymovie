


'use strict';

let mongoose = require('mongoose');
require('../models/ShowTimeModel');/**
 * Returns an all users.
 *
 */
exports.showtimeList = function() {
    ShowTime.aggregate([
       
       // { $match: {orderId: mongoose.Types.ObjectId(req.params.orderId)}},
        
        { '$lookup': { from: 'Movies', localField: 'movieId', foreignField: '_id', as: 'movieRef'} },
        { '$unwind': '$movieRef' }, //We may need movie info like name and description so pushing it to the result
        { '$lookup': { from: 'Theatre', localField: 'theatreId', foreignField: '_id', as: 'theatreRef'} },
        { '$unwind': '$theatreRef' },
        { $group : {
            "_id": {id:"$_id", movieId:"$theatreId"}, //rather than only id we may need other fields for sort
            "doc":{"$first":"$$ROOT"}   //the main reason why this grouping was used: sum of the donations for each fundraisers
        }},      
    ]).exec(function (err, docs){
    //Use docs here. It will be object so for printing results: 
    const promise =  JSON.stringify(docs);
    return promise;

});   
   
}

