
//Base socket.io connection
var socket = io();

let app = new PIXI.Application({
    width: 256,         // default: 800
    height: 256,        // default: 600
    antialias: true,    // default: false
    transparent: false, // default: false
    resolution: 1,      // default: 1 
    backgroundColor: 0xfffff // default: 0x0000000
});

//Create the game window
document.body.appendChild(app.view);

//load player sprite.
PIXI.Loader.shared.add("/images/outline.png").load(setupPlayer);

//create a list of players
let players = new Array();

//create a player and add them to the list of players
function setupPlayer() {
    let player = new PlayerObj();
    let playerSprite = new PIXI.Sprite(
        PIXI.Loader.shared.resources["/images/outline.png"].texture
    );

    playerSprite.anchor.x = 0.5;
    playerSprite.anchor.y = 0.5;
    player.sprite = playerSprite;

    players.push(player);
    app.stage.addChild(player.sprite);
}

//listener to create a new player
socket.on('addPlayer', function (dat) {
    setupPlayer();
});


//Recieve updates from server
socket.on('update', function (dat) {
    
});

//Controls 
document.onkeypress = function (e) {
    console.log(e.key);
    if (event.key === "w") {
        socket.emit('thrust');
    }
    if (event.key === "a") {
        socket.emit('rotateLeft');
        players[0].sprite.rotation -= .1;
    }
    if (event.key === "s") {
        socket.emit('deThrust');
    }
    if (event.key === "d") {
        socket.emit('rotateRight');
        players[0].sprite.rotation += .1;
    }         
    if (event.key === "q") {
        socket.emit('strafeLeft');
    }         
    if (event.key === "e") {
        socket.emit('strafeRight');
    } 
    if (event.key === "f") {
        socket.emit('stabalize');
    }
};

//player class to contain data for local simulation
class PlayerObj{
    constructor(id, sprite, x, y, direction, speed, maxSpeed, turnSpeed, force, maxForce) {
        this.id = id;
        this.sprite = sprite;
        this.x = x;
        this.y = y;
        this.direction = direction;
        this.speed = speed;
        this.maxSpeed = maxSpeed;
        this.turnSpeed = turnSpeed;
        this.force = force;
        this.maxForce = maxForce;
    }
}