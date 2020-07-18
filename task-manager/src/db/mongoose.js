const mongoose = require('mongoose');
const validator = require('validator');

mongoose.connect('mongodb://127.0.0.1:27017/tasks-manager-api', {
  useNewUrlParser: true,
  useCreateIndex: true
});

// Create the task model:
const Task = mongoose.model('Task', {
  description: {
    type: String,
    required: true,
    trim: true
  },
  // email: {
  //   type: String,
  //   required: true,
  //   validate(value) {
  //     if(!validator.isEmail(value)) {
  //       throw new Error('Email is invalid');
  //     }
  //   }
  // },
  completed: {
    type: Boolean,
    default: false
    // required: true
    // validate(value) {
    //   if(!value) {
    //     throw new Error('A created task should be always false');
    //   }
    // }
  }
});

// Instantiate the model:
const tasks = [];
tasks.push(new Task({
  description: 'Walk the dog ',
  email: 'dog@dog.com',
  completed: false
}));
tasks.push(new Task({
  description: 'Pet the cat',
  email: 'cat@cat.com',
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
