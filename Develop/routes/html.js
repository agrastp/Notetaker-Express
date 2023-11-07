const htmlRouter = require('express').Router();
const path = require('path');

htmlRouter.get("/notes", (req, res) =>{
    res.sendFile(path.join(_dirname, "../public/notes.html"));
});

htmlRouter.get('*', (req, res) => {
    res.sendFile(path.join(_dirname, "./public/index.html"));
});

module.exports = htmlRouter;