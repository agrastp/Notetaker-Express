//Import express 

const router = require('express').Router();
const path = require('path');

//GET the path and joins with index.html and notes.html

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

router.get("/notes", (req, res) =>{
    res.sendFile(path.join(__dirname, "../public/notes.html"));
});


module.exports = router;
