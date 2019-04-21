
//using all the mongoose methods find. findById, save
var mongoose = require('mongoose');
require('../models/MovieModel');
Movies = mongoose.model('Movies');

exports.search = function (params) {
    const promise = Movies.find(params).exec()
    return promise;
};


exports.save = function (movie) {
    const newMovie = new Movies(movie);
    const promise = newMovie.save();
    return promise;
};


exports.get = function (movieId) {
    const promise = Movies.findById(movieId).exec();
    return promise;
};


exports.update = function (movie) {
    const promise = Movies.findOneAndUpdate({ _id: movie._id }, movie).exec();
    return promise;
};
