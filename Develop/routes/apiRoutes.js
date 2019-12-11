var notes = require("../data/notes");
  
  module.exports = (app) => {
      //code when a user "visits" the page
      app.get("/api/notes", function(req, res) {
        res.json(notes);
      });
      app.post("/api/notes", function(req, res) {
        notes.push(req.body);
      }
      //app.post('/notes', notes.create);
      //app.get('/notes', notes.findAll);
      //app.get('/notes/:noteId', notes.findOne);
      //app.delete('/notes/:noteId', notes.delete);
  }
  