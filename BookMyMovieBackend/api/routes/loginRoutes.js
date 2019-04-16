'use strict';
module.exports = function(app){
    let userlist = require('../controllers/UserController');
    let login = require('../controllers/loginController');

    app.route('/users')
        .get(userlist.list_all_users)
        .post(userlist.create_user);

    app.route('/users/:UserId')
        // .get(userlist.read_user)
        // .put(userlist.update_user);
        //.delete(contactlist.delete_contact)

    app.route('/login')
        .post(login.login);

};
