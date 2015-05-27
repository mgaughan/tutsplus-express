var express = require('express'),
	app = express();

app.set('view engine', 'jade');

// Request object
app.get('/:breedOfDog', function(req, res){

	// http://expressjs.com/api.html#req

	req.params.breedOfDog;
	req.body.ATTR;
	req.query.ATTR;
	
	// checks the three above
	// params, body, then query
	req.params('ATTR'); 

	req.route;
	req.originalUrl;
	req.ip; // returns remote address of request

	req.cookies.ATTR; // if using cookie middleware
	req.get(); // any header name
	req.accepts('text/html'); // find out what type of req is acceptable
});

// Response object
app.get('/:breedOfDog', function(req, res){

	// http://expressjs.com/api.html#res

	res.status(200); // set status 
	res.set(header, value);
	res.get(header);

	res.cookie(name, value);
	res.clearCookie(name);

	res.redirect(status, path); // Get request to that path
	res.send(status, text);

	res.json(status, jsonObj); // sends as json string
	res.jsonp(status, object); // sends object with callback

	res.download(filePath);

	res.render(filePath, properties, function(err, html){
		// allows you to modify html before its sent down
		// do something here
		res.send(200, html);
	});

});

// Formatting Requests
app.get('/', function(req, res){
	res.format({
		// TODO: why is this not working at the bottom
		'application/json': function() {
			res.json({ topic: 'Express' });
		},
		// Can get it via 'curl localhost:3000'
		'text/plain': function() {
			res.send('text response');
		},
		'text/html': function() {
			res.render('index');
		}
	});
});

app.listen(3000);
