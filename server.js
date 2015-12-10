//server.js

//set up

var express = require('express');
var app = express();	//create our app w/ express
var morgan = require('morgan');
var bodyParser = require('body-parser');	//pull information from HT ML POST (express4)
var methodOverride = require('method-override');	//simulate DELETE and PUT (express4)
 
app.use(express.static(__dirname + '/public')); //set static files location /public/img for users
app.use(morgan('dev')); //log every request to the console
app.use(bodyParser.urlencoded({'extended':'true'}));    //parse application/x-www-form-urlencoded
app.use(bodyParser.json()); //parser application/json
app.use(bodyParser.json({type:'application/vnd.api+json'}));    //parse application/vnd.api+json
app.use(methodOverride());

//routes =====================================================
//load the routes
require('./app/routes')(app);

//listening (start app with node server.js)	========================
var port = 3000;
app.listen(port);
console.log("App listening on port "+port);

