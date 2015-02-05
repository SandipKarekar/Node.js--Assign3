var sys = require('sys');
var http = require('http');

http.createServer(function (req, res){
  res.writeHead(200, {'content-type': 'text/html'});
  res.write('<h1>Hello World</h1>');
  res.end('<h2>This the end</h2>');
}).listen(3000, '127.0.0.1');

sys.puts('Server running at http://127.0.0.1:3000');

