require('../server/index.js');

const express = require('express');
const path = require('path');
const adminController = require('./server/AdminController');

var app = express();

app.listen(3001, () => {
    console.log('Express start at 3000');
});

app.use('/admin', adminController);