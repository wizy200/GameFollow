const Player = require('./Models/player');
//Create express server.
const app = require('express')();
const express = require('express');
const http = require('http').createServer(app);
//Setup socket.io
const io = require('socket.io')(http);
//Planck Physics
const planck = require('planck-js')();



app.get('/', function (req, res) {
    res.sendFile(__dirname + '/client/index.html');

});
//Setup listening port.
const port = 3000;
http.listen(port);
//Setup Static Files
app.use(express.static('Client'));

//Setup IO callbacks.
io.on('connection', function (sock) { 
    //log the new connection to console.
    console.log('new connection: ' + sock.id);
    createPlayer(sock.id);
    //create control callbacks
    sock.on('thrust', function () {
       let player = getPlayer(sock.id);
    });
    sock.on('deThrust', function () {
        let player = getPlayer(sock.id);
    });
    sock.on('rotateLeft', function () {
        let player = getPlayer(sock.id);
    });
    sock.on('rotateRight', function () {
        let player = getPlayer(sock.id);
    });
    sock.on('strafeLeft', function () {
        let player = getPlayer(sock.id);
    });
    sock.on('strafeRight', function () {
        let player = getPlayer(sock.id);
    });
    sock.on('stabalize', function () {
        let player = getPlayer(sock.id);
    });



    //handle disconnects
    sock.on('disconnect', function () {
        console.log("disconnected: " + sock.id);
        removePlayer(sock.id);
    });
});
//List of players
let players = new Array();
//send player states
function sendUpdates() {

}
//create player
function createPlayer(id) {
    let player = new Player(id, 0, 0, 0, 0, 100, 0, 0, 100);
    players.push(player);
    console.log(players.length);
}
//remove players
function removePlayer(id) {
    players = players.filter(function (value, index, arr) {
        return value.id !== id;
    });
    console.log(players.length);
}

function getPlayer(id) {
     let tempPlayer = players.filter(function (value, index, arr) {
        return value.id === id;
    });
    console.log("got player: " + tempPlayer[0].id);
    return tempPlayer;
}


var world = plank.world({
    gravity: planck.Vec2(0, 10)
});

var ground = world.createBody({
    type: 'static',
    position: planck.Vec2(2,5)
});

ground.createFixture({
    shape: planck.Edge(Vec2(-40.0, 0.0), Vec2(40.0,0.0))
});
