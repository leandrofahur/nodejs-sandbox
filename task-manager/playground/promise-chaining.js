require('../src/db/mongoose');
const Task = require('../src/models/task');

// Task.findByIdAndUpdate('5f125f62f059904d25ddffb3', { completed: true }).then((res) => {
//   console.log(res);
//   return Task.countDocuments({ completed: true });
// }).then((res,rej) => {
//   console.log(res);
// }).catch(err => {
//   console.log(err);
// })

const updateTaskIsCompletedToFalse = async (id, completed) => {
  const taskCompleted = await Task.findByIdAndUpdate('5f125f72f059904d25ddffb4', { completed: false });
  const count = await Task.countDocuments({ complete: true });
  return {
    completed: taskCompleted,
    count: count
  };
}

updateTaskIsCompletedToFalse().then(res => {
  console.log(res.completed);
  console.log(res.count);
})