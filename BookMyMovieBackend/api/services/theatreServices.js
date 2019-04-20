
'use strict';

let mongoose = require('mongoose');
require('../models/TheatreModel');

let Theatre = mongoose.model('Theatre');
// save method
exports.save = function (theatre) {
    const newTheatre = new Theatre(theatre);
    const promise = newTheatre.save();
   // console.log(pr
    return promise;
};