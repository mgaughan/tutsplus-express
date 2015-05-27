var apiV1 = require('express').Router();

apiV1.get('/names', function(req, res){
	res.send('first from API 1');
});

module.exports = apiV1;