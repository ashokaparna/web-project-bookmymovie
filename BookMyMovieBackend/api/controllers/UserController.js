'use strict';
//import user service.
const userService = require('../services/userServices');

//code for post method
exports.create_user = function(req, res) {  
    const newUser = Object.assign({}, req.body);
    console.log(newUser);
    const resolve = (user) => {
        
        res.status(200);
        res.json(user);
    };
    userService.save(newUser)
        .then(resolve).then(console.log("resolved"))
        .catch(renderErrorResponse(res));
  };

    // error function
    let renderErrorResponse = (response) => {
        const errorCallback = (error) => {
            if (error) {
                response.status(500);
                response.json({
                    message: error.message
                });
            }
        }
        return errorCallback;
    };

/**
 * Returns a list of contacts in JSON
 *
 * @param {request} {HTTP request object}
 * @param {response} {HTTP response object}
 */
exports.list_all_users = function (request, response) {
    response.header('Access-Control-Allow-Origin' , '*' );
    const resolve = (contacts) => {
        response.status(200);
        response.json(contacts);
    };
    userService.userList({})
        .then(resolve)
        .catch(renderErrorResponse(response));
};


