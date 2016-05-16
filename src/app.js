'use strict';

debugger;

var cool = require('cool-ascii-faces');
var express = require('express');
var parser = require('body-parser');
var router = require('./api');

var app = express();

require('./database');
require('./seed');

// app.use('/', express.static('public'));
app.use(express.static(__dirname + '/public'));
app.use(parser.json());

app.use('/api', router);

app.get('/cool', function(request, response) {
  response.send(cool());
});

app.listen(3000, function() {
    console.log('The server is running on port 3000');
});
