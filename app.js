var http = require('http'),
     urls = [ 'technotip.org',
             'technotip.com',
             'www.capturecaption.com'
             ];

for (var i = 0; i < urls.length; i++) {
	ping( urls[i] );
};

function ping( url ) {

  var start = new Date();

  http.get({ host: url}, function (res){
  	console.log('URL :' + url);
  	console.log('Response Time: ' + (new Date()- start) + 'ms');
  });
}