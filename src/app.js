'use strict';

debugger;

var express = require('express');
var parser = require('body-parser');
var router = require('./api');

var app = express();

require('./database');
require('./seed');

app.use('/', express.static('public'));
app.set('port', (process.env.PORT || 5000));
app.use(parser.json());

app.use('/api', router);

app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});
