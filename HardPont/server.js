'use strict';
const express = require('express');
const socketio = require('socket.io');
//setup express server
const app = express();
app.use(express.static('public'));
//static server
app.use(express.static('dist'));

//Ports
const port = 3000;
app.get('/', (req, res) => res.send('Hello World!'));
const server = app.listen(port);
//setup Socket IO
const io = socketio(server);

//setup socket register callbacks
io.on('connection', socket => {
    console.log('Connected', socket.id);

    socket.on(Constants.MSG_TYPES.JOIN_GAME, joinGame);
    socket.on(Constants.MSG_TYPES.INPUT, handleInput);
    socket.on('disconnect', onDisconnect);
});
