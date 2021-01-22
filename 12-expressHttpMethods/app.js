// npm i express

const exp = require('express');
const abc = exp();

abc.get('/',function(req,res){
    res.send("Hi this is home page get request");
})

abc.get('/login',function(req,res){
    res.send("Hi this is login page get request");
})

// To use post, use postman app
abc.post('/login',function(req,res){
    res.send("Hi this is login page post request");
})

abc.delete('/login',function(req,res){
    res.send("This is a delete method in login page");
})

abc.put('/login',function(req,res){
    res.send("This is a put method in login page");
})


abc.listen(3000);