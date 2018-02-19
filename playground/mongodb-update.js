const {MongoClient, ObjectID} = require('mongodb');

// Start a connection
MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, client) => {
  if (error) return console.log('Unable to connect to MongoDB server');
  console.log('Connected to MongoDB server');

  const db = client.db('TodoApp');

  // Update
  db.collection('Todos').findOneAndUpdate({
    _id : new ObjectID('5a8acf3b0784a43c50e21d3c')
  }, {
    $set: {
      completed: true
    }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  });

  // Update 2
  db.collection('Users').findOneAndUpdate({
    _id : new ObjectID('5a8ae26765b33a0004e27bd6')
  }, {
    $set: {
      name: 'Nastya',
      location: 'Pyt-Yakh, RU'
    },
    $inc: {
      age: -3
    }
  }, {
    returnOriginal: false
  }).then((result) => console.log(result));

  // End connection
  client.close()
});
