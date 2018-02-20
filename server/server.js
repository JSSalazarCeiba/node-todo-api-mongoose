// Load modules
const _ = require('lodash');
const express = require('express');
const bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();
app.use(bodyParser.json());

var port = process.env.PORT || 3000;

/* --- POST --- */
// Create todo
app.post('/todos', (req, res) => {
  var todo = new Todo({
    text: req.body.text
  });

  todo.save().then((doc) => {
    res.send(doc);
  }, (error) => {
    res.status(400).send(error);
  });
});

/* --- GET --- */
// Fetch all todos
app.get('/todos', (req, res) => {
  Todo.find().then((todos) => {
    res.send({todos});
  }, (error) => {
    res.status(400).send(error);
  });
});

// Fetch one todo by id
app.get('/todos/:id', (req, res) => {
  let id = req.params.id;
  if (!ObjectID.isValid(id)) return res.status(404).send();

  Todo.findById(id)
    .then((todo) => {
      if (!todo) return res.status(404).send();
      res.send({todo});
    })
    .catch((error) => res.status(400).send());
});

/* --- DELETE --- */
// Delete a single todo by id
app.delete('/todos/:id', (req, res) => {
  let id = req.params.id;
  if(!ObjectID.isValid(id)) return res.status(404).send();

  Todo.findByIdAndRemove(id)
    .then((removedTodo) => {
      if(!removedTodo) return res.status(404).send();
      res.send({removedTodo});
    })
    .catch((e) => res.status(400).send());
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

/* --- PATCH ---*/
// Update a document by id
app.patch('/todos/:id', (req, res) => {
  let id = req.params.id;
  let body = _.pick(req.body, ['text', 'completed']);
  if (!ObjectID.isValid(id)) return res.status(404).send();

  if (_.isBoolean(body.completed) && body.completed) {
    body.completedAt = new Date().getTime();
  } else {
    body.completed = false;
    body.completedAt = null;
  }

  Todo.findByIdAndUpdate(id, {$set: body}, {new: true})
    .then((todo) => {
      if (!todo) return res.status(404).send();
      res.send({todo});
    })
    .catch((e) => res.status(400).send());
});

// Export modules
module.exports = {app};
