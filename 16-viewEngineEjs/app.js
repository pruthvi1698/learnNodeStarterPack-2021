// npm i express & npm i ejs

const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.get('/login/:name', function(req,res){
    console.warn(req.params.name);
    res.render('Profile', {name:req.params.name});
})

app.listen(3000)