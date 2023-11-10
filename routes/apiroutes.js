// const fs = require('fs');
const dbData = require("../db/db.json");
const router = require('express').Router();
// const uniqid = require('uniqid');

// GET /api/notes should read the json db.json file and return saved notes
router.get('/api/notes', (req, res) => {
    res.json(dbData);
});
  
// POST /api/notes should revieve a new note to save on the req.body, add it to db.json and return to the client
//Each note will need a unique id using the npm package uniqid
// router.post('/api/notes', (req, res) => {
//     console.info(`${req.method} request recieved to add a note`);

//     const { id, title, text } = req.body;

//     if (id && title && text) {
//         const newNote = {
//             id: uniqid(), 
//             title, 
//             text
//         };

//         const response = {
//             status: 'success', 
//             body: newNote,
//         };
//     };
// });
        
    
    
module.exports = router;