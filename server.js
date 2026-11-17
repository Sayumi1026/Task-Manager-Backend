
const express = require("express");

const app = express();

const PORT = 5001;

// Home route
app.get("/", (req, res) => {
    res.send("Student Task Manager Backend is Running!");
});

// Get all tasks
app.get("/api/tasks", (req, res) => {
    res.json({
        message: "Here are all your tasks",
        tasks: []
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


app.post("/api/tasks", (req, res) => {

    const newTask = {
        id: Date.now(),
        text: req.body.text,
        completed: false
    };

    tasks.push(newTask);

    res.status(201).json({
        message: "Task added successfully",
        task: newTask
    });

});