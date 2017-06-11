var express = require('express');
var app = express();
var mongojs = require('mongojs');
var db = mongojs('contactlist', ['contactlist']);
var bodyParser = require('body-parser');

/*app.get('/', function (req, res) {
	res.send("Hello World!, I am learning mean stack from the beginning.");
});*/

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.get('/contactlist', function (req, res) {
	console.log("I received a get request!");
	db.contactlist.find().sort({'_id':-1}, function (err, docs) {
		console.log(docs);
		res.json(docs);
	});
	/*person1 = {
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
	res.json(contactlist);*/
});

app.post('/contactlist', function (req, res) {
	console.log(req.body);
	db.contactlist.insert(req.body, function (err, doc) {
		console.log(doc);
		res.json(doc);
	});
});

app.put('/contactlist/:id', function (req, res) {
	var id = req.params.id;
	console.log(req.body);
	db.contactlist.update({_id:mongojs.ObjectId(id)}, req.body, function (err, doc) {
		console.log(doc);
		res.json(doc);
	});
});

app.delete('/contactlist/:id', function (req, res) {
	var id = req.params.id;
	console.log(id);
	db.contactlist.remove({_id:mongojs.ObjectId(id)}, function (err, doc) {
		res.json(doc);
	});
});

app.get('/contactlist/:id', function (req, res) {
	var id = req.params.id;
	console.log(id);
	db.contactlist.findOne({_id:mongojs.ObjectId(id)}, function (err, doc) {
		res.json(doc);
	});
});

app.listen(3000);
console.log('Server is running from Server.js');