const box = '\u25A2' // box representation
let grid = ''
let recordPositions = []
let allPositions = []

class Turtle {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        // this.startingPosition(this.x, this.y);
    }

    // startingPosition(x, y) {
    //     console.log(`x: ${this.x + x}, y: ${this.y + y}`)
    //     return this
    // }

    forward(steps) {
        // console.log(`moved ${steps} along the X axis.  
        // Turtle moved starting from position ${this.x} on the X axis, ${steps} steps to the right along the X axis.
        // The current position for the Turtle on the X axis is ${this.x + steps}`)

        for (let i=0; i<steps; i++) {
            grid = grid + " " + box
        }
        console.log("grid: ", grid)

        if (this.x === 0) {
            this.x = this.x + steps
        }

        let k = this.x
        let v = this.y
        recordPositions = [k,v]
        console.log("recordPositions", recordPositions)

        allPositions.push(recordPositions)
        console.log("allPositions", allPositions)
        return this
    }

    right() {
        console.log(`current value for x: ${this.x} and y: ${this.y}: `, this.x, this.y)
        console.log("moved one spot to the right (represent with newline)")
        
        return this
    }
}



//let newTurtle = new Turtle(0, 0)
let moveForward = new Turtle(0, 0).forward(3).right()