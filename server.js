// Load modules
var {mongoose} = require('./db/mongoose');

// Create a model
var Todo = mongoose.model('Todo', {
  text: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  completed: {
    type: Boolean,
    default: false
  },
  completedAt: {
    type: Number,
    default: null
  }
});

// Create a new instance
var newTodo = new Todo({
  text: 'Cook dinner'
});

// Save the document
newTodo.save().then((doc) => {
  console.log('Saved todo', JSON.stringify(doc, undefined, 2));
}, (error) => {
  console.log('Unable to save todo', error);
});

// Create another new instance & save it
var otherTodo = new Todo({
  text: 'Play with the cat',
  completed: true,
  completedAt: 123
});

otherTodo.save().then((doc) => {
  console.log('Saved todo', JSON.stringify(doc, undefined, 2));
}, (error) => {
  console.log('Unable to save todo', error);
});

/* --- User model ---*/
var User = mongoose.model('User', {
  email: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  }
});

var newUser = new User({
  email: 'day@night.com'
});

newUser.save().then((doc) => {
  console.log('User saved', JSON.stringify(doc, undefined, 2));
}, (error) => {
  console.log('Unable to save user', error);
});

var otherUser = new User({
  email: 'lorem@ipsum.com'
});

otherUser.save().then((doc) => {
  console.log('User saved', JSON.stringify(doc, undefined, 2));
}, (error) => {
  console.log('Unable to save user', error);
});
