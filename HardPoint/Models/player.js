class Player {
    constructor(id, x, y, direction, speed, maxSpeed, turnSpeed, force, maxForce) {
        //set id
        this.id = id;
        //player coordinates and direction.
        this.x = x;
        this.y = y;
        this.direction = direction;
        //players speed in units.
        this.speed = speed;
        this.maxSpeed = maxSpeed;
        this.turnSpeed = turnSpeed;
        //setup force.
        this.force = force;
        this.maxForce = maxForce;

    }

}
module.exports = Player;
