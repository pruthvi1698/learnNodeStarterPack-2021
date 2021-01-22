var http = require('http');
http.createServer(function(req,res){
    res.write("Hello server hit success");
    res.end(); 
}).listen(5000)