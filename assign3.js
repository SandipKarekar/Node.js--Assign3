var sys = require('sys');
var http = require('http');
var url = require('url');

http.createServer(function (req, res){
  var parts = req.url.split('/');
  var parsed = url.parse(req.url);

  console.log(parts[1]);
  
  var fs = require('fs');
  fs.exists(parts[1], function (exists){
    if(exists){
      fs.readFile(parts[1], function (err, data) {
        if (err) {
          res.writeHead(500, {"Content-Type": "text/html"});
          res.write("<h1>Internal server error</h1>");
          res.end();
        } else {
          res.writeHead(200, {'Content-Type': 'text/html'});
          res.write('<html><body><h1>' + parsed.pathname + '</h1><img src="data:image/jpeg;base64,')
          res.write(new Buffer(data).toString('base64'));
          res.end('"/></body></html>');
        }
      });
    } else {
      res.writeHead(404, {"Content-Type": "text/html"});
      res.write("<h1>File not found " + parts[1] + "</h1>");
      res.end();
    }
  });
}).listen(3000, '127.0.0.1');

sys.puts('Server running at http://127.0.0.1:3000');