const fs = require('fs');
const db = require("../db/db.json");
const router = require('express').Router();
const uniqid = require('uniqid');

// GET /api/notes should read the json db.json file and return saved notes
router.get('/api/notes', (req, res) => {
    fs.readFile(db, (err, data) => {
        if (err) throw err;
        console.log(JSON.parse(data));
        res.send(data)
    })
});
// POST /api/notes should revieve a new note to save on the req.body, add it to db.json and return to the client
//Each note will need a unique id using the npm package uniqid
router.post('/api/notes', (req, res) => {
    let newNote = {
        id: uniqid(),
        title: req.body.title,
        text: req.body.text
    }
    fs.readFile('./db/db.json', (err, data) => {
        if (err) throw err;
        let newData = JSON.parse(data);

        newData.push(newNote);
        console.log(newData)

        fs.writeFile('./db/db.json', JSON.stringify(newData), (err) => {
            if (err) throw err;

            res.send('note has been added')
        });
    });
});


module.exports = router;