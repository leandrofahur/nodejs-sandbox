// CRUD: Create Read Update Delete
const { MongoClient, ObjectID } = require('mongodb');

const connectionURL = 'mongodb://127.0.0.1:27017';
const dbName = 'task-manager';

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
  if(error) {
    return console.log('Unabe to connect to the database!');
  } 

  const db = client.db(dbName);

  


});