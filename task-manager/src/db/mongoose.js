const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/tasks-manager-api', {
  useNewUrlParser: true,
  useCreateIndex: true
});

// Create the task model:
const Task = mongoose.model('Task', {
  description: {
    type: String
  },
  completed: {
    type: Boolean
  }
});

// Instantiate the model:
const tasks = [];
tasks.push(new Task({
  description: 'Walk the dog',
  completed: false
}));
tasks.push(new Task({
  description: 'Pet the cat',
  completed: true
}));

// Save the model:
tasks.forEach(task => {
  task.save().then(resolve => {
    console.log(`Saved the task: ${task}`);
  }) .catch((error) => {
    console.log(error);
  })

});
