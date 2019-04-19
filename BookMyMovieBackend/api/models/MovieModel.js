'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var MovieSchema = new Schema({

    movieName: {
        type: String,
        required: 'Name of movie is mandatory field.'
    },
    movieLength: {
        type: Number,
        required: 'Length of Movie is mandatory field.'
    },
    directorName: {
        type: String,
        required: 'Name of the director is mandatory field.'
    },
    language: {
        type: String,
        required: 'Language is a Mandatory field.'
    },
    type: {
        type: String,
        required: 'Movie type is mandatory field..'
    },
    rating: {
        type: String,
        required: 'Rating is a mandatory field.'
    },
});
// exports model
module.exports = mongoose.model('Movies', OrderSchema);
