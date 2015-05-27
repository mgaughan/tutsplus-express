var express = require('express'),
	app = express();


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

app.listen(3000);
