// npm i express

const exp = require('express');
const app = exp();

const checkUrl = function(req,res,next){
    console.warn("requesting url is", req.originalUrl);
    next();
}

app.use(checkUrl);

app.get('/login',function(req,res){
    res.send("This is login page request");
})

app.get('/signup', function(req,res){
    res.send("this is signup page request");
})

app.listen(4000);