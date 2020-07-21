require('./db/mongoose');
const express = require('express');
const taskRouter = require('./routers/task');

const app = express();
const port = process.env.PORT || 3000

app.use(express.json())
app.use(taskRouter);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
})