const express = require("express");
const { createTodo } = require("../models/todo");
const { deleteTodo } = require("../models/todo");
const { updateTodo } = require("../models/todo");
const { getTodo } = require("../models/todo");

const { create } = require("../models/todo");
const { loginID } = require("../models/todo");
const router = express.Router();

router.post("/", async (req, res) => {
  // console.log({body: req.body});

  const { title, description } = req.body;
  const todo = await createTodo(title, description);
  res.send(todo);
});

router.delete("/:id", async (req, res) => {
  const _id = req.params.id;
  const resp = await deleteTodo(_id);
  res.send(resp);
});

router.put("/:id", async (req, res) => {
  const _id = req.params.id;
  const { title, description } = req.body;
  const todo = await updateTodo(_id, title, description);
  res.send(todo);
});

router.get("/", async (req, res) => {
  const todo = await getTodo();
  const page = req.query.page;
  const limit = req.query.limit;
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;
  const result = todo.slice(startIndex, endIndex);
  res.json(result);
});


  router.post("/sign", async (req, res) => {
    const { username, password } = req.body;
    const login = await create(username, password);
    res.send(login);
  });

  router.post("/login", async (req, res) => {
    const { username, password } = req.body;
    const login = await loginID(username, password);
    if (login.length<=0) {
      res.json("Invalid username or password");
    }
    else{
      res.json("Login successful");
    }
  });

module.exports = router;
