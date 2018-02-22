// Load modules
const {SHA256} = require('crypto-js');

let message = 'I am user number 3';
let hash = SHA256(message).toString();

console.log(`Message: ${message}`);
console.log(`Hash: ${hash}`);

var data = {
  id: 7
}

var token = {
  data,
  hash: SHA256(JSON.stringify(data) + 'secret').toString()
};

// --- Simulated attack
token.data.id = 9;
token.hash = SHA256(JSON.stringify(token.data)).toString();
// --- end attack

var resultHash = SHA256(JSON.stringify(token.data) + 'secret').toString();

if (resultHash === token.hash) {
  console.log('Data was not changed');
} else {
  console.log('Data was changed. Do not trust!');
}
