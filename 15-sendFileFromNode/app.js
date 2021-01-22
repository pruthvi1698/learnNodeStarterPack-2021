const exp = require('express');
const app = exp();

app.get('/', function(req,res){
    res.sendFile(__dirname + "/Home.html");
})

app.get('/about', function(req,res){
    res.sendFile(__dirname + "/About.html");
})

app.listen(3000);