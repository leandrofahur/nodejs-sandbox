// CRUD: Create Read Update Delete
const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient

const connectionURL = 'mongodb://127.0.0.1:27017';
const dbName = 'task-manager';

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
  if(error) {
    return console.log('Unabe to connect to the database!');
  } 

  const db = client.db(dbName);

  const tasksObj = [
    {
      description: "Walk the dog",
      completed: false
    },
    {
      description: "Pet the cat",
      completed: true
    },
    {
      description: "Insert tasks into mongo",
      completed: false
    }
  ]

  db.collection('tasks').insertMany(tasksObj, (error, result) => {
    if(error) {
      return console.log('Unable to insert the tasks');
    }
    console.log(result.ops)
  });
});