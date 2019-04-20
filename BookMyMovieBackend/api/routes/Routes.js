'use strict';
module.exports = function (app) {
    let userlist = require('../controllers/UserController');
    let login = require('../controllers/loginController');
    let orderlist = require('../controllers/OrderController');
    let theatrelist = require('../controllers/TheatreController');
    let reviewlist = require('../controllers/ReviewController');

    app.route('/users')
        .get(userlist.list_all_users)
        .post(userlist.create_user);
    app.route('/users/:UserId')
    app.route('/login')
        .post(login.login);
    app.route('/orders')
        .get(orderlist.list_all_orders)
        .post(orderlist.create_order);
    app.route('/orders/:userId')
        .get(orderlist.user_orders)
     app.route('/theatre')        
        .post(theatrelist.create_theatre)
     app.route('/reviews')     
        .get(reviewlist.list_all_reviews)   
        .post(reviewlist.create_review);
    app.route('/reviews/:userId')
        .get(reviewlist.user_reviews) 
     app.route('/reviews/:reviewId')
         .delete(reviewlist.delete) 
};
