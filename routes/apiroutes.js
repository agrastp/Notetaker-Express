const fs = require('fs');
const db = require("../db/db.json");
const router = require('express').Router();
const uniqid = require('uniqid');

// GET /api/notes should read the json db.json file and return saved notes
// POST /api/notes should revieve a new note to save on the req.body, add it to db.json and return to the client
//Each note will need a unique id using the npm package uniqid