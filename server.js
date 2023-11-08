// Dependencies
const express = require('express');
const fs = require('fs');
const path = require('path');

// creating port
const PORT = process.env.PORT || 3001;

// To use express
const app = express();

// Middleware for parsing JSON and urlencoded form data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// asks express to create a route for every file in the 'public' folder 
app.use(express.static('public'));

app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, 'notes.html'))
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'))
});


// app listener 
app.listen(PORT, () => {
    console.log(`Listening at localhost${PORT}`);
});