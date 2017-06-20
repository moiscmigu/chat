var express = require('express');
var socket = require('socket.io');
var app = express();
var path = require('path');

//uses
app.use(express.static('public'));

var server = app.listen(5678, function() {
    console.log('server up on port 5678');
});//end of server

app.get('/', function(req, res) {
    console.log('Base url hit');
    res.sendFile(path.resolve('public/views/index.html'));
});//end get '/'

var io = socket(server);

io.on('connection', function(socket) {
    console.log('new connection ' + socket.id);
    socket.on('disconnect', function() {
        console.log(socket.id + ' disconnected');
    });//end socket disconnect

    socket.on('chat', function(data) {
        console.log(data);
        io.emit('chat', data);
    });//end socket on chat

});//end io.on
