
//Create express server.
const app = require('express')();
const express = require('express');
const http = require('http').createServer(app);
//Setup socket.io
const io = require('socket.io')(http);



app.get('/', function (req, res) {
    res.sendFile(__dirname + '/client/index.html');

});
//Setup listening port.
const port = 3000;
http.listen(port);
app.use(express.static('Client'));
io.on('connection', function (sock) {
    console.log('new connection');
    sock.on('text', function (msg) {
        console.log('message' + msg);
    });
});

