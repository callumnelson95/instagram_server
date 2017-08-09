var express = require('express');
var path = require('path');
var engines = require('consolidate');
var app = express();

app.engine('html', engines.hogan); 
app.set('views', __dirname + '/views');
app.set('view engine', 'html');

//TODO
	//Create database to store images in
	//Set up get requests from feed page to reload page with new images (every 1 second or so)
	//Figure out syntax for POST request from App Inventor


app.get('/', function(request, response) {
	console.log('Homepage requested');
	response.render('index.html');
});

app.post('/', function(request, response) {
	console.log('Image posted to feed!');



	response.end('Successfully added!');
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


