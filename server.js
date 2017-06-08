var express = require('express');
var app = express();

/*app.get('/', function (req, res) {
	res.send("Hello World!, I am learning mean stack from the beginning.");
});*/

app.use(express.static(__dirname + '/public'));
app.get('/contactlist', function (req, res) {
	console.log("I received a get request!");

	person1 = {
		name: 'Akbar Hossain',
		email: 'akbarhossain@mail.com',
		phone: '01925197090'
	};
	person2 = {
		name: 'Sajib Sikder',
		email: 'sajib@mail.com',
		phone: '01925197090'
	};
	person3 = {
		name: 'Saddam Hossain',
		email: 'saddam@mail.com',
		phone: '01925197090'
	};

	var contactlist = [person1,person2,person3];
	res.json(contactlist);
})
app.listen(3000);
console.log('Server is running from Server.js');