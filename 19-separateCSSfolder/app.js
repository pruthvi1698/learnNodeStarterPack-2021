// npm i express & npm i ejs

const express = require('express');
const app = express();

app.use('/assets', express.static('assets'));

app.set('view engine', 'ejs');

app.get('/profile/:name', function(req,res){
    data = {email:'pruthvikumar1698@gmail.com',address:'Davanagere',skills:['HTML','Php','ReactJs','NodeJs']}
    res.render('Profile', {name:req.params.name,data:data});
})

app.get('/login', function(req,res){
    res.render('Login');
})

app.get('/', function(req,res){
    res.render('Home');
})

app.listen(3000)