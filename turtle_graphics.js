const box = '\u25A2' // box representation
let grid = ''
let recordPositions = []
let allPositions = []

class Turtle {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.direction = "right"; // default is facing right along the X axis
    }

    compass(facing = this.direction) {
        switch (facing) {
            case 'up':
                return 'up';
            case 'down':
                return 'down';
            case 'left':
                return 'left';
            case 'right': 
                return 'right';
        }
    }

    forward(steps) {
        // NEED TO THINK OF WAY TO KNOW DIRECTION OF MOVEMENT
        // MUST CHECK DIRECTION BEFORE KNOWING WHERE TO MOVE
        let currentDirection = this.compass()
        console.log("the current direction is: ", currentDirection)

        for (let i=0; i<steps; i++) {
            if (currentDirection === 'right') { // Must add to move forward, maybe minus to move backward?
                this.x += 1;
            } else if (currentDirection === 'left') { // subtracting when movement is left means minusing x (reverse of 'right')
                this.x -= 1;
            } else if (currentDirection === 'top') {// reverse of 'bottom'
                this.y += 1;
            } else if (currentDirection === 'bottom') { 
                this.y -= 1;
            }
        }
        // SWITCH STATEMENT DOES NOT WORK INSIDE LOOPS, IT EVALUATES THE FIRST CASE THAT MATCHES THE VALUE OF THE VARIABLE THAT IS IN THE SWITCH STATEMENT
        
        let k = this.x
        let v = this.y
        recordPositions = [k,v]
        console.log("recordPositions", recordPositions)

        allPositions.push(recordPositions)
        console.log("allPositions", allPositions)
        return this
    }

    right() {
        console.log(`current value for x: ${this.x} and y: ${this.y}: `)
        // console.log("moved one spot to the right (represent with newline?)")
        
        if (this.x === 0) {
            console.log("moved right on the Y axis, facing X axis")
        } else if (this.y === 0) {
            console.log("moved forward on the X axis, turning right on the Y axis, facing Y axis")
        }

        // face direction 
        return this
    }
}

let move = new Turtle(0, 0).forward(3).right()
console.log(move)
// MAYBE CREATE 10 X 10 GRID FIRST

// for (let i=0; i<steps; i++) {
//     grid = grid + " " + box
// }
// console.log("grid: ", grid)

// function createGrid() {
//     let width = 10
//     let height = 10
//     let grid = ''
//     let rows = ''
//     let columns = ''

//     for (let i=0; i<width; i++) {
//         rows = rows + box + " "
//     }

//     for (let a=0; a<height; a++) {
//         columns = rows + "\n"
//         grid = columns.repeat(height)
//     }
//     console.log(grid)
// }
// createGrid()