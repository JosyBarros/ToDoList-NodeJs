const Task = require("../models/Task");

const getAllTask = async (req, res) => {
  try {
    const tasksList = await Task.find();
    return res.render("index", {tasksList});
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};

const createTask = async (req, res) => {
  const task = req.body;

  if (!task) {
    return res.redirect("/");
  }
  try {
    await Task.create(task);
    return res.redirect("/");
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};

module.exports = {
  getAllTask,
  createTask,
};
