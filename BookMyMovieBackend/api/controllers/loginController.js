'use strict';
//import user service.
const loginService = require('../services/loginServices');

/**
 * Returns a web token after sign in
 *
 * @param {request} {HTTP request object}
 * @param {response} {HTTP response object}
 */
exports.login = function (request, response) {
    response.header('Access-Control-Allow-Origin' , '*' );
    const user = Object.assign({}, request.body);
    if (!request.body.UserName || !request.body.Password){
        response.status(400).send("Error. Please enter the correct username and password");
         return;
    }
    const resolve = (loginResponse) => {
        response.status(200);
        response.json(loginResponse);
    };
    loginService.login({user})
        .then(resolve)
        .catch(renderErrorResponse(response));
};


