var apiV2 = require('express').Router();

apiV2.get('/names', function(req, res){
	res.send('first from API 2');
});

module.exports = apiV2;