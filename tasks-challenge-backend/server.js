const express = require('express');
const cors = require('cors');
const tasksController = require('./controllers/tasksController');
const err = require('./middlewares/error');

const app = express();

app.use(cors(
    {
        origins: ['http://localhost:3000'],
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
    }
));

app.use(express.json());

app.get('/', tasksController.getTasks);
app.put('/', tasksController.updateTask);
app.post('/', tasksController.createTask);
app.delete('/', tasksController.deleteTask);

app.use(err);

const PORT = 3001;
app.listen(PORT, () => console.log(`Running on ${PORT}`));
