var express = require('express'),
	app = express();

// Needs to be above route that uses the param
app.param('name', function(req, res, next, name){
	req.name = name[0].toUpperCase() + name.substring(1);
	next();

	// Example useage to lookup user from db:
	// Users.findOne({ username: name }, function(err, user){
	// 	req.user = user;
	// 	next();
	// });
});

app.get('/name/:name', function(req, res){
	res.send('Your name is '+ req.name);
});

app.put('/name/:name/edit');
app.delete('/name/:name/delete');

app.listen(3000);
