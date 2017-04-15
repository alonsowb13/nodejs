var http = require("http");

var handler = function(request, response){
  console.log("Hola mundo");
  response.end("Fin del mundo");
}

var server = http.createServer(handler);

server.listen(8080);
