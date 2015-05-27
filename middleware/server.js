var express = require('express'),
	bodyParser = require('body-parser'),
	app = express();

// third party middleware
app.use(bodyParser.urlencoded({ extended: true }));

// custom middleware
// like using app.all but on every route
app.use(function(req, res, next){
	console.log('this will log on every request');
	next();
});

// route functions
app.get('/route', function(req, res){
	res.send('this is a route');
});

// built in middleware
app.use(express.static('./public'));

app.listen(3000);