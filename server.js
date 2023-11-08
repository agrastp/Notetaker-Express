// Dependencies
const express = require('express');
const path = require('path');
const htmlRoutes = require('./routes/apiroutes');
const apiRoutes = require('./routes/apiroutes');

// creating port
const PORT = process.env.PORT || 3001;

// To use express
const app = express();

// Middleware for parsing JSON and urlencoded form data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// asks express to create a route for every file in the 'public' folder 
app.use(express.static('public'));
app.use('/', htmlRoutes);
app.use('/', apiRoutes);

// app listener 
app.listen(PORT, () => {
    console.log(`Listening at localhost${PORT}`);
});