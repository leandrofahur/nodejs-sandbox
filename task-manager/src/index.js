require('./db/mongoose');
const express = require('express');
const Task = require('./models/task');

const app = express();
const port = process.env.PORT || 3000

app.use(express.json())


app.post('/users', (req, res) => {
  const task = new Task(req.body);
  task.save().then(() => {
    res.send(task);
  }). catch( err => {
    console.log(err);
  })
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
})