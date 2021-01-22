// npm i express

const abc = require('express');
const app = abc();

app.get('/', function(req,res){
    res.send("Hello express js here")
}).listen(3000)



// relative paths example

// const abc = require('express');
// const app = abc();

// app.get('/abc', function(req,res){
//     res.send("Hello express js here")
// }).listen(3000)