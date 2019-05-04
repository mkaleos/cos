var http = require('http');
var dt = require('./myfirstmodule');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write("Obecny czas i data to: " + dt.myDateTime());
  res.end();
}).listen(8080); 
