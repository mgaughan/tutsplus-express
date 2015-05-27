var express = require('express'),
	app = express();

app.get('/', function(req, res){
	res.render('index.jade', {
		title: 'Hello Express & Jade'
	});
});

// Can chain on app
app.listen(3000, function(){
	console.log('listening on port 3000');
});