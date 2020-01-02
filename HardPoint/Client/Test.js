
//Pixel to unit scale.
const pscale = 30;

//convert units to pixels
function mpx(m) {
    return m * pscale;
}

//convert pixels to units
function pxm(p) {
    return p / pscale;
}

//Game width/Height
const global = {
    gameWidth: 700,
    gameHeight: 700
};

const renderOptions = {
    backgroundColor: 0xfffff1,
    autoResize: true,
    resolution: window.devicePixelRatio,
    antialias: true
};
//setup the pixi window and pass in the render options.
const app = new PIXI.Application(0, 0, renderOptions);
app.renderer.view.style.position = 'absolute';
app.renderer.view.style.display = 'block';
app.renderer.backgroundColor = renderOptions.backgroundColor;
app.renderer.resize(global.gameWidth, global.gameHeight);
document.body.appendChild(app.view);

//Setup the Physics world - Planck
const world = planck.World(planck.Vec2(0, 0), true);
var group = new PIXI.Container();
app.stage.addChild(group);
var Circle = planck.Circle;
var shipFixtureDef = {};
shipFixtureDef.density = 10;
shipFixtureDef.position = planck.Vec2(0, 0);



//load textures
app.loader.add('ship', 'images/outline.png');


function addShip() {
    var body = world.createBody().setDynamic();
    body.setPosition(planck.Vec2(0, 0));
    body.createFixture(Circle(0.2), shipFixtureDef);
    var pos = body.getPosition();
    var ship = addShipSprite(pos.x, pos.y);
    circle.body = body;
    group.addShipSPrite(ship);
}

function addShipSprite(x, y) {
    let shipTexture = new PIXI.Sprite(resources.ship.texture);
    var sprite = shipTexture;
    sprite.anchor.set(0.5);
    sprite.position.set(x, y);
    return sprite;
}


//main physics and game loop on 60hz cycle
(function loop() {

    world.step(1 / 60);
    //Iterate through the list of physics bodies to get fixtures.
    for (var body = world.getBodyList(); body; body.getNext()) {
        //use the fixtures to draw their positions in PIXI.
        for (var fixture = body.getFixtureList(); fixture; fixture = fixture.getNext()) {
            draw();
        }
    }
    window.requestAnimationFrame(loop);
})();

world.on('remove-fixture', function (fixture) {
    //remove fixture.
});
