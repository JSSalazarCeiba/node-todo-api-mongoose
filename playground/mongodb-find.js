const {MongoClient, ObjectID} = require('mongodb');

// Start connection
MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, client) => {
  if (error) return console.log('Unable to connect to MongoDB server');

  console.log('Connected to MongoDB server');
  const db = client.db('TodoApp');

  // Make a full query
  db.collection('Todos').find().toArray().then((docs) => {
    console.log('Get all docs');
    console.log(JSON.stringify(docs, undefined, 2));
  }, (error) => {
    console.log('Unable to fetch todos', error);
  });

  // Make a query by value
  db.collection('Todos').find({completed: false}).toArray().then((docs) => {
    console.log('Get docs by value of completed');
    console.log(JSON.stringify(docs, undefined, 2));
  }, (error) => {
    console.log('Unable to fetch todos', error);
  });

  // Make a query by id value
  db.collection('Todos').find({
    _id: new ObjectID("5a8ad71565b33a0004e27ae4")
  }).toArray().then((docs) => {
    console.log('Get docs by id');
    console.log(JSON.stringify(docs, undefined, 2));
  }, (error) => {
    console.log('Unable to fetch todos', error);
  });

  // Make a query to count docs
  db.collection('Todos').find().count().then((count) => {
    console.log('Get docs by _id');
    console.log(`Todos count: ${count}`);
  }, (error) => {
    console.log('Unable to fetch todos', error);
  });

  // Get all docs with name: J. Sebastian from Users collection
  db.collection('Users').find({
    name: 'J. Sebastian'
  }).toArray().then((docs) => {
    console.log('Get docs count by name value');
    console.log(JSON.stringify(docs, undefined, 2));
  }, (error) => {
    console.log('Unable to fetch users', error);
  });

  // End connection
  client.close();
});
