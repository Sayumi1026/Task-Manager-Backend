
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


app.put("/api/tasks/:id", (req, res) => {

    const taskId = Number(req.params.id);

    const task = tasks.find((t) => t.id === taskId);

    if (!task) {
        return res.status(404).json({
            message: "Task not found"
        });
    }

    task.completed = req.body.completed;

    res.json({
        message: "Task updated successfully",
        task: task
    });

});


app.delete("/api/tasks/:id", (req, res) => {

    const taskId = Number(req.params.id);

    const taskIndex = tasks.findIndex((t) => t.id === taskId);

    if (taskIndex === -1) {
        return res.status(404).json({
            message: "Task not found"
        });
    }

    const deletedTask = tasks.splice(taskIndex, 1);

    res.json({
        message: "Task deleted successfully",
        task: deletedTask[0]
    });

});
