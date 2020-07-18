require('./db/mongoose');
const express = require('express');
const Task = require('./models/task');

const app = express();
const port = process.env.PORT || 3000

app.use(express.json())


app.post('/tasks', (req, res) => {
  const task = new Task(req.body);
  task.save().then(() => {
    res.status(201).send(task);
  }). catch( err => {
    res.status(400).send(err);
  })
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
})