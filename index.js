'use strict';

var express = require('express');
var bodyParser = require('body-parser');
var app = express();


//Parse application/json requests properly
app.use(bodyParser.json());

//Serve all assets in the src folder
app.use(express.static(__dirname + '/src'));

//TODO logic

var messages=[];

app.post('/api/messages', function (req, res) {
  messages.push(req.body);

  res.json(req.body);
});

// Routing, but this time on the server
app.get('/api/messages', function (req, res) {
  res.json(messages);
});

  //res.send('<h1>Hello, ' + req.params.id + '</h1>');
  //res.json({ yourId: req.params.id, message: "Thanks for posting!" });

// Starting our router/applicatin listening on port 3000
var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
