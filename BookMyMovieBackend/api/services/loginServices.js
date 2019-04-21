'use strict';

let mongoose = require('mongoose');
require('../models/UserModel');

let User = mongoose.model('User');
// save method
exports.login = function (user) {
    const promise = User.findOne({username: user.body.username, password: user.body.password});
    return promise;
};
