var express = require('express');
var path = require('path');
var app = express();

app.engine('html', engines.hogan); 
app.set('views', __dirname + '/views');
app.set('view engine', 'html'); 


app.get('/', function(request, response) {
	console.log('Homepage requested');
	response.render('index.html');
});


//Start listening on port
app.listen(8080, function(error, response) {
	if (error != null){
		console.log("Error: " + error);
	}
	else {
		console.log('listening on port: 8080');
	}
});