// CRUD: Create Read Update Delete
const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient

const connectionURL = 'mongodb://127.0.0.1:27017';
const dbName = 'task-manager';

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
  if(error) {
    return console.log('Unabe to connect to the database!');
  } 

  // const db = client.db(dbName);
  // db.collection('users').insertOne({
  //   name: "Leandro",
  //   age: "Machado"
  // }, (error, result) => {
  //   if(error) {
  //     console.log('Unable to insert user');
  //   }

  //   console.log(result.ops);
  // });
});