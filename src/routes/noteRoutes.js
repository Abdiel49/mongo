const express = require('express');
const Note = require('../models/Note');

const route = express.Router();

route.get('/', (_, res) => {
  Note.find({})
      .then((notes) => {
        if (notes) {
          res.send(notes);
        } else {
          res.status(400).send([]);
        }
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({error: err});
      });
});

route.get('/:id', (req, res, next) => {
  const {id} = req.params;
  Note.findById(id)
      .then((note) => {
        if (note) {
          res.send(note);
        } else {
          res.status(404).end();
        }
      })
      .catch((err) => next(err) );
});

route.post('/', (req, res) => {
  const body = req.body;
  const note = new Note(body);
  note.save()
      .then((result) => {
        res.json(result);
      })
      .catch((err) => {
        console.log('error on POST method note', err);
        res.status(500).json({error: err});
      });
});

route.put('/:id', (req, res, next) => {
  const {id} = req.params;
  const body = req.body;

  const newNote = {
    contend: body.contend,
    important: body.important,
  };

  Note.findByIdAndUpdate(id, newNote, {new: true})
      .then((note) => res.json(note))
      .catch((err) => next(err));
});

route.delete('/:id', (req, res, next) => {
  const {id} = req.params;
  Note.findByIdAndRemove(id)
      .then((result) => {
        res.status(204).json(result);
      })
      .catch((err) => next(err));
});

module.exports = route;
