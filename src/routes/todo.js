const express =require('express');
const {createTodo} =require('../models/todo');
const router =express.Router();

router.post('/', async(req, res) => {
    // console.log({body: req.body});   
    
    const {title,description} =req.body;
    const todo= await createTodo(title,description);
    res.send({message:"not implemented"});

});
module.exports =router;