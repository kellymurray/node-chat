'use strict';

var express = require('express');
var bodyParser = require('body-parser');
var app = express();


//Parse application/json requests properly
app.use(bodyParser.json());

//Serve all assets in the src folder
app.use(express.static(__dirname + '/src'));

// Routing, but this time on the server
app.get('/things/:id', function (req, res) {
  res.json({
    yourId: req.params.id,
    message: req.query.msg || 'Hello',
    age: req.query.age || 'unknown'
  });

  //res.send('<h1>Hello, ' + req.params.id + '</h1>');
  //res.json({ yourId: req.params.id, message: "Thanks for posting!" });
});

// Starting our router/applicatin listening on port 3000
var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
