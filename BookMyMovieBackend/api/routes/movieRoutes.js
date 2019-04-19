
module.exports = function (app) {
    var movieList = require('../controllers/MovieController');

    // Movie table Routes
    app.route('/movies')
        .get(movieList.listMovies)
        .post(movieList.createMovie);


    app.route('/movies/:movieId')
        .get(movieList.readMovie)
        .put(contactApp.updateMovie)
};

