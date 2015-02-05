var sys = require('sys');
var http = require('http');

/*
/add/2/2 => 4
/sub/103/42 => 61
/mul/3/2 => 6
/div/100/25 => 4
*/
var operations = {
  add : function(a, b){ return a + b},
  sub : function(a, b){ return a - b},
  mul : function(a, b){ return a * b},
  div : function(a, b){ return a / b}
}

http.createServer(function (req, res){
  var parts = req.url.split('/');
  var op = operations[parts[1]];
  var a = parseInt(parts[2], 10);
  var b = parseInt(parts[3], 10);

  var result = op ? op(a, b): 'Error';

  res.writeHead(200, {'content-type': 'text/plain'});
  res.end('' + result);
}).listen(3000, '127.0.0.1');

sys.puts('Server running at http://127.0.0.1:3000');

