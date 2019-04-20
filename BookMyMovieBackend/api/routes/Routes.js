'use strict';
module.exports = function (app) {
    let user = require('../controllers/UserController');
    let login = require('../controllers/loginController');
    let orderlist = require('../controllers/OrderController');
    let theatrelist = require('../controllers/TheatreController');
    let signUp = require('../controllers/SignUpController');

    app.route('/users/:_id')
        .get(user.getProfile);
    app.route('/user')
        .post(user.profile);
    app.route('/signUp')
        .post(signUp.signUp);
    app.route('/login')
        .post(login.login);
    app.route('/orders')
        .get(orderlist.list_all_orders)
        .post(orderlist.create_order);
    app.route('/orders/:userId')
        .get(orderlist.user_orders)
     app.route('/theatre')        
        .post(theatrelist.create_theatre);


};
