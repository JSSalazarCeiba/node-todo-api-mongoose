const {MongoClient, ObjectID} = require('mongodb');

// Start a connection
MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, client) => {
  if (error) {
    return console.log('Unable to connect to MongoDB server');
  }

  console.log('Connected to MongoDB server');
  const db = client.db('TodoApp');

  // Delete many approach
  db.collection('Todos').deleteMany({text: 'Eat breakfast'}).then((result) => {
    console.log(result);
  }, (error) => {
    console.log('Unable to delete data', error);
  });

  // Delete one approach
  db.collection('Todos').deleteOne({text: 'Do homework'}).then((result) => {
    console.log(result);
  }, (error) => {
    console.log('Unable to delete data', error);
  });

  // Find one and delete approach
  db.collection('Todos').findOneAndDelete({text: 'Prepare lunch'}). then((result) => {
    console.log(result);
  }, (error) => {
    console.log('Unable to delete data', error);
  });

  // End connection
  client.close();
});
