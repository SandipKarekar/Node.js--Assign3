var sys = require('sys');
var http = require('http');

http.createServer(function (req, res){
  var parts = req.url.split('/');
  
  res.writeHead(200, {'content-type': 'text/html'});
  res.end('<h1>' + parts[1] + '</h1>');
}).listen(3000, '127.0.0.1');

sys.puts('Server running at http://127.0.0.1:3000');