var express = require('express');
var mongoose = require('mongoose');
var path = require('path');
var bodyParser = require('body-parser');
var port = process.env.PORT || 3000;

mongoose.connect('mongodb://localhost/chatterbox');

var app = express();

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '../public')));
app.use('/bundles', express.static(path.join(__dirname, '../bundles')));

// app.get('/', function (req, res) {
//   res.sendFile(path.join(__dirname, '../public/index.html'));
// });

app.get('/api/test', function (req, res, next) {
  res.send('yo dawg');
});

app.listen(port, function () {
  console.log('listening at port: ', port);
});