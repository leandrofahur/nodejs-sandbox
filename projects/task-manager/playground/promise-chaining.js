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

const deleteTaskAndCount = async (id) => {
  const task = await Task.findByIdAndDelete(id);
  if(!task) throw new Error(`There is no such task with the id: ${id}`);
  const count = await Task.countDocuments({ completed: false });
  return count;
}

deleteTaskAndCount('5f125f72f059904d25ddffb4').then(count => {
  console.log(count);
}).catch(err => {
  console.log(err);
})