var express = require('express'),
	bodyParser = require('body-parser'),
	app = express();

// GET - Read
// POST - Create
// PUT - Update
// DELETE - Delete

app.use(bodyParser.urlencoded({ extended: true }));

var names = [];

app.all('/', function(req, res, next){
	console.log('from all');
	next();
});

app.get('/', log, function(req, res){
	res.render('index.jade', { names: names });
});

app.post('/', function(req, res){
	names.push(req.body.name);
	res.redirect('/');
});

// app.put
// app.delete

app.listen(3000);

function log(req, res, next){
	console.log(names);
	next();
};
