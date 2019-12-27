
var socket = io();
function test() {
    var text = document.getElementById("textInput").value;
    socket.emit('text', text);
}

let app = new PIXI.Application({
    width: 256,         // default: 800
    height: 256,        // default: 600
    antialias: true,    // default: false
    transparent: false, // default: false
    resolution: 1       // default: 1 
});

document.body.appendChild(app.view);