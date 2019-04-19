'use strict';
//import user service.
const showtimeService = require('../services/showtimeServices');

/**
 * Returns a list of contacts in JSON
 *
 * @param {request} {HTTP request object}
 * @param {response} {HTTP response object}
 */
exports.list_all_showtime = function (request, response) {
    response.header('Access-Control-Allow-Origin' , '*' );
    const resolve = (showtime) => {
        response.status(200);
        response.json(showtime);
    };
    showtimeService.showtimeList({})
        .then(resolve)
        .catch(renderErrorResponse(response));
};
