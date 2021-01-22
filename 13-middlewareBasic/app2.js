// npm i express

const exp = require('express');
const app = exp();
const router = exp.Router();

const checkUrl = function(req,res,next){
    console.warn("requesting url is", req.originalUrl);
    next();
}

app.get('/login', function(req,res){
    res.send("This is login page");
});

router.get('/about',checkUrl,function(req,res){
    res.send('This is about page');
});

router.get('/contact', checkUrl, function(req,res){
   res.send('This is contact page');
});

// to use middleware on all the routes / is used down and check condition 
app.use('/', router);

app.listen(3000);