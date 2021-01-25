// npm i express & npm i ejs

const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.get('/login/:name', function(req,res){
    data = {email:'pruthvikumar1698@gmail.com',address:'Davanagere',skills:['HTML','Php','ReactJs','NodeJs']}
    res.render('Profile', {name:req.params.name,data:data});
})

app.listen(3000)