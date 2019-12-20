const ObjectClass = require('./object');

class Player extends ObjectClass {
    constructor(id, username, x, y) {
        super(id, x, y, Math.random());
    }
}