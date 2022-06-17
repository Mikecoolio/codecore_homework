const box = '\u25A2' // box representation
let grid = ''

class Turtle {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.direction = "right"; // default is facing right along the X axis
        this.allPositions = [[this.x, this.y]] // Array must be initialized in the contructor, for the point pair arrays to be added persistently
    }

    compass() { // SWITCH STATEMENT FOR COMPASS NOT NEEDED, JUST POINT TO this.currentDirection
        return this.direction
    }

    forward(steps) {
        let recordPositions = []
        // NEED TO THINK OF WAY TO KNOW DIRECTION OF MOVEMENT
        // MUST CHECK DIRECTION BEFORE KNOWING WHERE TO MOVE
        let currentDirection = this.compass()
        // console.log("the current direction is: ", currentDirection)

        for (let i = 1; i <= steps; i++) {
            if (currentDirection === 'right') { // Must add to move forward, maybe minus to move backward?
                this.x += 1;
            } else if (currentDirection === 'left') { // subtracting when movement is left means minusing x (reverse of 'right')
                this.x -= 1;
            } else if (currentDirection === 'top') {// reverse of 'bottom'
                this.y += 1;
            } else if (currentDirection === 'down') { 
                this.y -= 1;
            }
            recordPositions = [this.x, this.y]
            console.log("recordPositions", recordPositions)
    
            this.allPositions.push(recordPositions)
        }
        // SWITCH STATEMENT DOES NOT WORK INSIDE LOOPS, IT EVALUATES THE FIRST CASE THAT MATCHES THE VALUE OF THE VARIABLE THAT IS IN THE SWITCH STATEMENT
    
        return this
    }

    right() {
        if (this.direction === 'right') {
            console.log("turning down");
            this.direction = 'down';

        } else if (this.direction === 'left') {
            console.log("turning up");
            this.direction = 'top';

        } else if (this.direction === 'top') {
            console.log('turning right');
            this.direction = 'right';

        } else if (this.direction === 'down') { 
            console.log('turning left');
            this.direction = 'left';
        }
        return this
    }
    // left is copy and paste reverse of right
    left() {
        if (this.direction === 'right') {
            console.log("turning up");
            this.direction = 'top';

        } else if (this.direction === 'left') {
            console.log("turning down");
            this.direction = 'down';

        } else if (this.direction === 'top') {
            console.log('turning left');
            this.direction = 'left';

        } else if (this.direction === 'down') { 
            console.log('turning right');
            this.direction = 'right';
        }
        return this
    }

    positions() {
        return this.allPositions 
    }
}

// let move = new Turtle(0, 0).forward(3).right().forward(2);
let move = new Turtle(0, 4).forward(3).left().forward(3);
// console.log(move)
console.log("allPositions: ", move.positions())


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