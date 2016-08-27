'use strict';

var mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/mean-todo', function(err) {
    if (err) {
        console.log('Failed connecting to Mongodb');
    } else {
        console.log('Successfully connected to Mongodb');
    }
});
