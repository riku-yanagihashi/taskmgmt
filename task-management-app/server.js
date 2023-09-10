// server.js

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3001;

app.use(bodyParser.json());

// タスクデータの格納
const tasks = [];

// タスク一覧を取得
app.get('/api/tasks', (req, res) => {
    res.json(tasks);
});

// タスクを追加
app.post('/api/tasks', (req, res) => {
    const newTask = req.body;
    tasks.push(newTask);
    res.json(newTask);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
