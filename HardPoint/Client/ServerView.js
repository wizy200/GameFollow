let obs = new Array();
var pl = planck, Vec2 = pl.Vec2;
var world = new pl.World(Vec2(0, 0));

planck.testbed('HeavyOnLight', function (testbed) {
       

    world.createBody().createFixture(pl.Edge(Vec2(-40.0, 0.0), Vec2(40.0, 0.0)));

    obs.push(world.createDynamicBody(Vec2(0.0, 4.5)).createFixture(pl.Circle(0.5), 10.0));

    obs.push(world.createDynamicBody(Vec2(0.0, 10.0)).createFixture(pl.Circle(5.0), 10.0));

    return world;
});

(function loop() {
    world.step(1 / 60);
    document.onkeypress = function (e) {
        console.log(e.key);
        if (event.key === "w") {
            obs[0].getBody().applyLinearImpulse(planck.Vec2(0, 100), obs[0].getBody().getWorldCenter());
        }

    };
    window.requestAnimationFrame(loop);
})()