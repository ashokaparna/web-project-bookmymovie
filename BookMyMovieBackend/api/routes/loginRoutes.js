'use strict';
module.exports = function(app){
    let userlist = require('../controllers/UserController');
    let login = require('../controllers/loginController');
    let signUp = require('../controllers/SignUpController');
    let orderlist = require('../controllers/OrderController');

    app.route('/users')
        .get(userlist.list_all_users)
        .post(userlist.create_user);

    app.route('/users/:UserId')
        // .get(userlist.read_user)
        // .put(userlist.update_user);
        //.delete(contactlist.delete_contact)

    app.route('/signUp')
        .post(signUp.signUp);

    app.route('/login')
        .post(login.login);

        // Order Routes for get, post 
        app.route('/orders')
         .get(orderlist.list_all_orders)
         .post(orderlist.create_order);

        // Order Routes to get the orders for any user.
        app.route('/orders/:userId')
        .get(orderlist.user_orders) 


};
