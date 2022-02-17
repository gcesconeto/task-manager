const express = require('express');
const tasksController = require('./controllers/tasksController');
const err = require('./middlewares/error');

const app = express();

app.use(express.json());

app.get('/', tasksController.getTasks);
app.put('/', tasksController.updateTask);
app.post('/', tasksController.createTask);

app.use(err);

const PORT = 3001;
app.listen(PORT, () => console.log(`Running on ${PORT}`));
