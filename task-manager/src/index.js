require('./db/mongoose');
const express = require('express');
const Task = require('./models/task');

const app = express();
const port = process.env.PORT || 3000

app.use(express.json())

// Read all tasks:
app.get('/tasks', (req, res) => {
  Task.find({}).then((task) => {
    res.status(200).send(task);
  }).catch(err => {
    res.status(500).send(err);
  })
});

// Read one task:
app.get('/tasks/:id', async (req, res) => {
  const _id = req.params.id;
  try {
    const task = await Task.findById(_id);
    if(!task) {
      return res.status(404).send();
    }
    res.status(200).send(task);
  } catch(err) {
    res.status(500).send(err);
  }
});

// Create one task:
app.post('/tasks', async (req, res) => {
  const task = new Task(req.body);
  try {
    await task.save()
    res.status(201).send(task);
  } catch(err) {
    res.status(400).send(err);
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
})