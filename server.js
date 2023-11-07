// Dependencies
const express = require('express');

// To use express
const app = express();

// creating port
const PORT = process.env.PORT || 3001;


// asks express to create a route for every file in the 'public' folder 
app.use(express.static('public'));

// sets up express app to handle middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// routes to route files
app.require('./routes/api');
app.require('./routes/html');


// app listener - starts the server
app.listen(PORT, () => {
  console.log(`Listening at localhost${PORT}`);
});