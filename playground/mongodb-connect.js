const MongoClient = require('mongodb').MongoClient;

// MongoClient.connect(urlDb, callback)
MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, client) => {
  if (error) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
  const db = client.db('TodoApp');

  // Insert a document in the 'Todos' collection
  db.collection('Todos').insertOne({
    text: 'Study Gulp',
    completed: false
  }, (error, result) => {
    if (error) {
      return console.log('Unable to insert todo', error);
    }

    console.log(JSON.stringify(result.ops, undefined, 2));
  });

  // Insert a document in the 'Users' collection
  db.collection('Users').insertOne({
    name: 'J. Sebastian',
    age: 24,
    location: 'Medellin, CO'
  }, (error, result) => {
    if (error) return console.log('Unable to insert user', error);

    console.log(JSON.stringify(result.ops, undefined, 2));
  });

  // End connection
  client.close();
});
