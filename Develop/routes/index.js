const express = require('express');

//Import our files containing our routes
const htmlRouter = require('./html');
const apiRouter = require('./api');

const app = express();

app.use('/html', htmlRouter);
app.use('api', apiRouter);

module.exports = app;