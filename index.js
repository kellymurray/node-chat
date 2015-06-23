var express = require('express');
var app = express();

// Routing, but this time on the server
app.get('/', function (req, res) {
  res.send('Hello World!');
});

// Starting our router/applicatin listening on port 3000
var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
