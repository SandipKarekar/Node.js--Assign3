var http = require('http');

var server = http.createServer(function (req, res){
	res.writeHead(200,{'content-type': 'text/plain'});
	res.write('Welcome to the node !\n');
	res.end('Hello World\n');
});

server.listen(1337, 'localhost');

console.log('Server running at http://localhost:1337/')