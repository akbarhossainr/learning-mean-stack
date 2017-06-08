var express = require('express');
var app = express();

/*app.get('/', function (req, res) {
	res.send("Hello World!, I am learning mean stack from the beginning.");
});*/

app.use(express.static(__dirname + '/public'));

app.listen(3000);
console.log('Server is running from Server.js');