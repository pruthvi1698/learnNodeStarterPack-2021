var http = require('http');

var data = `
<h1>
Hi! Node Js Here
</h1>
<input type="text" /><br><br>
<input type="text" /><br><br>
<input type="text" />`

http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/html'})
    res.write(data);
    res.end();
}).listen(5000)