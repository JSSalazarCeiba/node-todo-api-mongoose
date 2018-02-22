// Load modules
const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');

let data = {
  id: 7
};

let token = jwt.sign(data, '7zt9');
console.log('Token', token);

let decoded = jwt.verify(token, '7zt9');
console.log('Decoded', decoded);
