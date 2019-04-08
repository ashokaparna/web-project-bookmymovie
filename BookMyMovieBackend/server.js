//require express framework
var express = require('express'),
    app = express(),
    //to execute on port 3000
    port = process.env.PORT || 3000,
    mongoose = require('mongoose'),
    bodyParser = require('body-parser');
    
// mongoose instance connection url connection
mongoose.Promise = global.Promise;
//connecting to DB using mongoose 
//Database with name kaminiDatabase will create automatically
mongoose.connect('');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//importing contact routes
var routes = require('./api/routes/contactRoutes'); 
routes(app); //register the route

app.listen(port);
console.log('API server started on: ' + port);
