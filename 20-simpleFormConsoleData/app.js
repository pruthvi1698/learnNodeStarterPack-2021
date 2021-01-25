// npm i express & npm i ejs

const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.get('/login', function(req,res){
    console.log(req.query);
    res.render('Login');
})

app.listen(3000)