class Turtle {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.startingPosition(x, y);
    }

    startingPosition(x, y) {
        console.log(`x: ${this.x}, y: ${this.y}`)
        return this
    }

    forward() {

    }
}

let newTurtle = new Turtle(0, 0)