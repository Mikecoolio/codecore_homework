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

    forward(steps) {
        console.log(`moved ${steps} along the X axis.  
        Turtle moved starting from position ${this.x} on the X axis, ${steps} steps to the right along the X axis.
        The current position for the Turtle on the X axis is ${this.x + steps}`)
        return this
    }
}

//let newTurtle = new Turtle(0, 0)
let moveForward = new Turtle(0, 0).forward(3)