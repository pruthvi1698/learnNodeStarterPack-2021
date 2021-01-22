var http = require('http');

http.createServer(function(req,res){
res.writeHead(200,{'Content-Type' : 'application\json'})
res.write('{"name" : "pruthvi"}');
res.end();
}).listen(3900)


// pass data from variable which is already of string format

// var http = require('http');
// var data = '{"name" : "pruthvi", "age" : "22"}'
// http.createServer(function(req,res){
// res.writeHead(200,{'Content-Type' : 'application\json'})
// res.write(data);
// res.end();
// }).listen(3900)


// json stringify data variable

// var http = require('http');
// var data = [{"name" : "pruthvi", "age" : "22"},{"name" : "sagar", "age" : "21"}]
// http.createServer(function(req,res){
// res.writeHead(200,{'Content-Type' : 'application\json'})
// res.write(JSON.stringify(data));
// res.end();
// }).listen(3900)
