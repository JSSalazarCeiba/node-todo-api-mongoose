// Load modules
const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

Todo.findByIdAndRemove('5a8c320265b33a0004e2996e').then((todo) => {
  console.log(todo);
});
