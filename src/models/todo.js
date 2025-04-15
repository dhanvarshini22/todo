const mongoose = require('mongoose');

const todoschema = new mongoose.Schema({
  title: String,
  description: String,
}, {
  timestamps: true
});

const todoModel = mongoose.model('todo', todoschema);

const loginschema = new mongoose.Schema({
 
  username : String,
  password : String,
}, {
  timestamps: true
});

const loginModel = mongoose.model('login', loginschema);

async function createTodo(title, description) {
  const todo = await todoModel.create({
    title,
    description,
  });
  return todo;
}

async function deleteTodo(_id) {
  const deleteResp = await todoModel.deleteOne({_id});
  return deleteResp;
}

async function updateTodo(_id, title, description) {
  const todo = await todoModel.updateOne({_id,}, {
    title,
    description,
  });
  return todo; 
} 

async function getTodo(){
  const todo = await todoModel.find({});
  return todo;
}

async function create(username, password) {
  const login = await loginModel.create({
    username,
    password,
  });
  return login;
}

async function loginID(username,password){
  const login = await loginModel.find({username,password});
  return login;
}

module.exports = {
  createTodo,
  deleteTodo,
  updateTodo,
  getTodo,
 
  create,
  loginID,
};
