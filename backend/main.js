var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

app.use(express.static("frontend"));

io.on('connection', function(socket) {
  console.log("DCD.OBRA: Conexión establecidad.")
  socket.on('new-stat', function(data) {
    console.log("DCD.OBRA: Nuevo estado ("+data+")")
    io.sockets.emit('stats', data);
  });
});

server.listen(5000, function() {
  console.log("DCD.OBRA: Servidor establecido.");
});
