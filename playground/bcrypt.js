// $ node playground/bcrypt.js --password="abc123"

const bcrypt = require('bcryptjs');
const yargs = require('yargs');

let password = yargs.argv.password;

bcrypt.genSalt(10, (err, salt) => {
  bcrypt.hash(password, salt, (err, hash) => {
    console.log('Password:', password);
    console.log('HashedPassword:', hash);

    console.log('--- Comparison ---');
    bcrypt.compare(password, hash, (err, res) => {
      console.log('Hash and password match:', res);
    });

    bcrypt.compare(password + 1, hash, (err, res) => {
      console.log('Hash and password match:', res);
    });

  });
});
