const router = require("express").Router();

// Controllers
const {getMyTasks, setNewTask, deleteTask, updateTask} = require("../../app/controllers/api/tasksController");

// Routes
router.get("/", getMyTasks);
router.post("/", setNewTask);
router.delete("/", deleteTask);
router.patch("/", updateTask);

module.exports = router;
