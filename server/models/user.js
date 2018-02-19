// Load modules
var mongoose = require('mongoose');

// User model
var User = mongoose.model('User', {
  email: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  }
});

// Export modules
module.exports = {User};
