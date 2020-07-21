require('./db/mongoose');
const express = require('express');
const Task = require('./models/task');

const app = express();
const port = process.env.PORT || 3000

app.use(express.json())

// Read all tasks:
app.get('/tasks', async (req, res) => {
  try {
    const task = await Task.find({})
    res.status(200).send(task);  
  } catch (err) {
    res.status(500).send(err);
  }
});

// Read one task:
app.get('/tasks/:id', async (req, res) => {
  try {
    const _id = req.params.id;
    const task = await Task.findById(_id);
    if(!task) {
      return res.status(404).send();
    }
    res.status(200).send(task);
  } catch(err) {
    res.status(500).send(err);
  }
});

// Update task by id:
app.patch('/tasks/:id', async (req, res) => {
  const updates = Object.keys(req.body);
  const allowUpdates = ['description', 'completed'];
  const isValidOperation = updates.every(update => allowUpdates.includes(update));
  
  if(!isValidOperation) {
    return res.status(400).send({error: 'Invalid updates!'});
  }

  try {
    const _id = req.params.id;
    const task = await Task.findByIdAndUpdate(_id, req.body, { new: true, runValidators: true });
    if(!task) {
      return res.status(404).send();
    }
    res.status(200).send(task);
  } catch(err) {
    res.status(400).send(err);
  }
})

// Delete task by id:
app.delete('/tasks/:id', async (req, res) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.id);
    if(!task) {
      return res.status(404).send();
    } else {
      res.status(200).send(task);
    }
  } catch(err) {
    res.status(500).send();
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