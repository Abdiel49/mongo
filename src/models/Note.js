const mongoose = require('mongoose');
const {Schema, model} = mongoose;

const noteSchema = new Schema({
  contend: String,
  date: Date,
  important: Boolean,
  user: String,
});

noteSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

const Note = model('Note', noteSchema);

module.exports = Note;
