


'use strict';

let mongoose = require('mongoose');
require('../models/OrderModel');

let Order = mongoose.model('Orders');
// save order method
exports.save = function (order) {
    console.log("inside order");
    const neworder = new Order(order);
    console.log("before order save");
    const promise = neworder.save();
    console.log(promise);
    return promise;
};


/**
 * Returns an all orders.
 *
 */
exports.orderList = function() {
    const promise = Order.find().exec();
    return promise;
}


