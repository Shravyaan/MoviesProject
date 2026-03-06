express = require("express");

const task = require("../task/Task");

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const task = await task.create(req.body);
    res.json(task);
  } catch (error) {
    res.json({ message: "Message not found" });
  }
});

router.get("/", async (req, res) => {
  const tasks = await task.find();
  res.json(tasks);
});

router.get("/:id", async (req, res) => {
  try {
    const taask = await Task.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
  } catch {
    res.json({ message: "Update Failed" });
  }
});

module.exports = router;
