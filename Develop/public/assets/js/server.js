//Dependencies
const express = require('express');

//app uses express
const app = express();

//creating port
const PORT = process.env.PORT || 3001;

//creates a route for every file in the public folder
app.use(express.static('public'));

//sets up express to handle middleware
app.use(express.urlencoded({extend: true}));
app.use(express.json());

//app listner to start the server
app.listen(PORT, () => {
    console.log(`App listening at http://localhost:${PORT}`);
});