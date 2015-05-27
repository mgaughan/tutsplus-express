var express = require('express'),
	bodyParser = require('body-parser'),
	app = express(),
	apiV1 = require('./api/api1'),
	apiV2 = require('./api/api2');

// http://expressjs.com/api.html#router

// Router Object
// - use
// - param
// - verb / all
// - route

app.use('/api/v1', apiV1);
app.use('/api/v2', apiV2);

app.listen(3000);
