var express = require('express'),
	app = express();

// set
app.set('env', 'development'); // process.env.NODE_ENV (default = undefined)
// JSONP sends back: callback({ name: 'mike' })
// This makes it: cb({ name: 'mike' })
app.set('jsonp callback name', 'cb'); 
// Sets the JSON replacer (filter) for JSON.stringify
app.set('json replacer', function(attr, val) {
	// Dont return the passwordHash
	if(attr == 'passwordHash'){
		return undefined;
	}
	return val.toUpperCase();
});
app.set('view engine', 'jade'); // Dont have to specify .jade in routes
app.set('views', 'templates'); // Changes template dir from view

// enable
app.enable('case sensative routing'); //  /hello  /Hello different
app.enable('strict routing'); // enabled by default  /hello  /hello/ same
app.enable('view cache'); // Caches template

//  disable
app.disable('x-powered-by'); // Ad in headers for express


// Routes
app.get('/user_info', function(req, res){
	// get user data here
	res.json(user); // JSON.stringify
});

app.get('/', function(req, res){
	res.render('index', {
		title: 'Hello Express & Jade'
	});
});

// Can chain on app
app.listen(3000, function(){
	console.log('listening on port 3000');
});