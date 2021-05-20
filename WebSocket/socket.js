/**
    상담실 소프트폰 연동
      - 연동불가로 인한 테스트코드로 websocket 테스트 진행
      
      - 해당 소스코드르 node.js로 실행
      - 실행방법
          $ node socket.js
*/

var readline = require('readline');
var WebSocketServer = require('websocket').server;
var http = require('http');

var r = readline.createInterface({
  input:process.stdin,
  ouput:process.stdout
});

var server = http.createServer(function (request, response) {
  console.log((new Date()) + ' Received request for ' + request.url);
  response.writeHead(404);
  response.end();
});

server.listen(8000, function () {
    console.log((new Date()) + ' Server is listening on port 8000');
});

wsServer = new WebSocketServer({
  httpServer: server,
  autoAcceptConnections: false
});

function originIsAllowed(origin) {
  return true;  
}

wsServer.on('request', function (request) {
  if (!originIsAllowed(request.origin)) {
    console.log((new Date()) + ' Connection from origin ' + request.origin + ' rejected.');
  }

  var connection = request.accept(null, request.origin);

  console.log((new Date()) + ' Connection accepted.');

  connection.on('message', function (message) {
    if (message.type === 'utf8') {
      console.log('Received Message: ' + message.utf8Data);
    } else if (message.type === 'binary') {
      console.log('Received Binary Message of ' + message.binaryData.length + ' bytes');
      connection.sendBytes(message.binaryData);
    }

  });

  connection.on('close', function (reasonCode, description) {
    console.log((new Date()) + ' Peer ' + connection.remoteAddress + ' disconnected.');
    r.close();
  });

  r.question("send:" , function(answer) {
    connection.sendUTF(answer);      
    r.close();
  });

});
