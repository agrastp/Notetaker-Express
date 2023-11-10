//Import express
const router = require('express').Router();

//Import the helpers file
const {
    readFromFile,
    readAndAppend,
    writeToFile,
  } = require('../helpers/fsUtils');

//Imports the uniqid package
const uniqid = require('uniqid');

// GET /api/notes should read the json db.json file and return saved notes

router.get('/notes', (req, res) => {
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
  });



// POST /api/notes should revieve a new note to save on the req.body, add it to db.json and return to the client
//Each note has a unique id using the npm package uniqid

  router.post('/notes', (req, res) => {
    console.log(req.body);
  
    const { title, text } = req.body;
  
    if (req.body) {
      const newNote = {
        title,
        text,
        id: uniqid(),
      };
  
      readAndAppend(newNote, './db/db.json');
      res.json(`Note added successfully`);
    } else {
      res.error('Error in adding note');
    }
  });

// DELETE Route for a specific note.....this is not working yet
router.delete('/notes:id', (req, res) => {
    const noteId = req.params.id;
    readFromFile('./db/db.json')
      .then((data) => JSON.parse(data))
      .then((json) => {
      
        const result = json.filter((note) => note.id !== noteId);
  
        // Save that array to the filesystem
        writeToFile('./db/db.json', result);
  
        // Respond to the DELETE request
        res.json(`Item ${noteId} has been deleted 🗑️`);
      });
  });
  


   
module.exports = router;