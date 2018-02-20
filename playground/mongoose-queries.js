// Load modules
const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var id = '5a8b5dcd755ebdd83f5863dc';

if (!ObjectID.isValid(id)) console.log('The id is not valid');

// Find general
Todo.find({
  _id: id
}).then((todos) => {
  console.log('Todos', todos);
}).catch((error) => {
  console.log(error);
});

// Find one
Todo.findOne({
  _id: id
}).then((todo) => {
  console.log('Todo', todo);
}).catch((error) => {
  console.log(error);
});

// Find one by id
Todo.findById(id).then((todo) => {
  console.log('Todo by id', todo);
}).catch((error) => {
  console.log(error);
});

/* --- Find users --- */
// Get all users
User.find().then((users) => {
  console.log('Users', JSON.stringify(users, undefined, 2));
  console.log(`There are ${users.length} users`);
}).catch((error) => {
  console.log(error);
});

// Get all users with lorem@ipsum.com email
User.find({
  email: 'lorem@ipsum.com'
}).then((users) => {
  console.log('Users by email', JSON.stringify(users, undefined, 2));
  console.log(`There are ${users.length} users with that email`);
}).catch((error) => {
  console.log(error);
});

// Get user by id
User.findById('5a8b35953b86a7e81f92feb4').then((user) => {
  console.log('User by id', user);
}).catch((error) => {
  console.log(error);
});
