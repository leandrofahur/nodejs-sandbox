require('../src/db/mongoose');
const Task = require('../src/models/task');

Task.findByIdAndUpdate('5f125f62f059904d25ddffb3', { completed: true }).then((res) => {
  console.log(res);
  return Task.countDocuments({ completed: true });
}).then((res,rej) => {
  console.log(res);
}).catch(err => {
  console.log(err);
})