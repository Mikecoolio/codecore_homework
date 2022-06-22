const box = '\u25A2' // box representation
let grid = ''
const blackBox = "\u25A0" // black box representation
let testBlackBoxRow = ''

class Turtle {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.direction = "right"; // default is facing right along the X axis
        this.allPositions = [[this.x, this.y]] // Array must be initialized in the contructor, for the point pair arrays to be added persistently
    }

    findMax(twoDArr) {
        let xCoord = []
        let yCoord = []

        let twoDArrFlat = twoDArr.flat()
        for (let i = 0; i < twoDArr.length; i++) {
            if (i % 2 === 0) {
                let poppedOddIndexs = twoDArrFlat.pop(twoDArrFlat[i])
                yCoord.push(poppedOddIndexs)
            } else {
                let poppedEvenIndexs = twoDArrFlat.pop(twoDArrFlat[i])
                xCoord.push(poppedEvenIndexs)
            }
        }

        let maxNumX = xCoord[0]
        let maxNumY = yCoord[0]  
        // This for loop turns the negative values within the yCoord array, into positive values without destroying the array structure
        for (let y = 0; y < yCoord.length; y++) { 
            yCoord[y] = Math.abs(yCoord[y])
        }

        for (let i = 1; i < xCoord.length; i++) {
            if (xCoord[i] > maxNumX) {
                maxNumX = xCoord[i]
            }
        }

        for (let a = 1; a < yCoord.length; a++) {
            if (yCoord[a] > maxNumY) {
                maxNumY = yCoord[a]
            }
        }
        console.log("maxNumY: ", maxNumY)   
        return [maxNumX, maxNumY]
    }

    negArrToPos(arr) {
        for (let y = 0; y < arr.length; y++) { 
            arr[y] = Math.abs(arr[y])
        }
        return arr
    }

    // findMaxOneDArr(oneDArr) {
    //     for (let b = 0; b < oneDArr.length; b++)
    // }

    compass() { // SWITCH STATEMENT FOR COMPASS NOT NEEDED, JUST POINT TO this.currentDirection because all this does is point to the
        //         default direction that the turtle is facing at the start of the program.
        return this.direction
    }

    forward(steps) {
        let recordPositions = []
        // NEED TO THINK OF WAY TO KNOW DIRECTION OF MOVEMENT
        // MUST CHECK DIRECTION BEFORE KNOWING WHERE TO MOVE
        let currentDirection = this.compass()
        // console.log("the current direction is: ", currentDirection)

        for (let i = 0; i < steps; i++) { // i=0; i<steps is the same thing as i=1; i<=steps
            if (currentDirection === 'right') { // Must add to move forward, maybe minus to move backward?
                this.x += 1;
            } else if (currentDirection === 'left') { // subtracting when movement is left means minusing x (reverse of 'right')
                this.x -= 1;
            } else if (currentDirection === 'up') {// reverse of 'bottom'
                this.y += 1;
            } else if (currentDirection === 'down') { 
                this.y -= 1;
            }
            recordPositions = [this.x, this.y]
            // console.log("recordPositions", recordPositions)
    
            this.allPositions.push(recordPositions)
        }
        // SWITCH STATEMENT DOES NOT WORK INSIDE LOOPS, IT EVALUATES THE FIRST CASE THAT MATCHES THE VALUE OF THE VARIABLE THAT IS IN THE SWITCH STATEMENT

        return this
    }

    right() {
        if (this.direction === 'right') {
            console.log("facing down from right");
            this.direction = 'down';

        } else if (this.direction === 'left') {
            console.log("facing up from left");
            this.direction = 'up';

        } else if (this.direction === 'up') {
            console.log('facing right from up');
            this.direction = 'right';

        } else if (this.direction === 'down') { 
            console.log('facing left from down');
            this.direction = 'left';
        }
        return this
    }
    // left is copy and paste reverse of right
    left() {
        if (this.direction === 'right') {
            console.log("facing up from right");
            this.direction = 'up';

        } else if (this.direction === 'left') {
            console.log("facing down from left");
            this.direction = 'down';

        } else if (this.direction === 'up') {
            console.log('facing left from up');
            this.direction = 'left';

        } else if (this.direction === 'down') { 
            console.log('facing right from down');
            this.direction = 'right';
        }
        return this
    }

    positions() {
        return this.allPositions 
    }

    print() {
        let allCoord = this.allPositions
        let maxNum = this.findMax(allCoord)
        // USE A NESTED FOR LOOP IN ORDER TO ITERATE THROUGH 2 ARRAYS
        console.log("maxNum inside print() ", this.findMax(allCoord)) // ex. [3,7] // NEED NESTED 2 NESTED FOR LOOPS TO ITERATE THROUGH 2D ARRAY AND CREATE GRID TO REPRESENT 2d ARRAY????   
        let maxNumXCoord = maxNum[0]
        let maxNumYCoord = maxNum[1]

        console.log("max X coords :", maxNumXCoord)
        console.log("max Y coords :", maxNumYCoord)
        console.log("TYPE OF X, Y COORDS: ", typeof maxNumXCoord)

        for (let a=0; a<allCoord.length; a++) {
            let pairs = this.findMax(allCoord[a])
            let stringedPairs = JSON.stringify(pairs)
            console.log("stringed pairs", stringedPairs)
        }

        // credit for the JSON.stringify code: (post by Igor Barbashin)
        // https://stackoverflow.com/questions/237104/how-do-i-check-if-an-array-includes-a-value-in-javascript
        for (let i=0; i<allCoord.length; i++) {
            // let pair = arr2[i]
            let wholeArr = this.allPositions
            let searchAgainst = allCoord[i]


            // let workWithIndex =
            // wholeArr.findIndex(pair => {
            //     let result = JSON.stringify(pair) === JSON.stringify(searchAgainst)
            //     console.log("array being searched by findIndex: ", pair)
            //     console.log("result being searched for: ", searchAgainst)
            //     console.log("result: ", result)
            // })
            // console.log("type of result: ", typeof result)
            // console.log("workWithIndex: ", workWithIndex)

            for (let c = 0; c < wholeArr.length; c++) {
                wholeArr[c] = this.negArrToPos(wholeArr[c])
            }
            return wholeArr
        }


        // for (let y=0; y<=maxNumYCoord; y++) { 
        //     for (let x=0; x<=maxNumXCoord; x++) {
        //         // MAYBE TRY CONCATENATING BOXES AND TEST IT OUT
        //         console.log("x: ", x)
        //         let pair = [x,y]
        //         console.log("x,y pair 2nd layer inside for loop", pair)
        //          // this creates a zigzag pyramid unfortunately
        //          // TRY TO ITERATE THROUGH ALL X POSITIONS, AND THEN TURN DIRECTION AND PUT A NEWLINE FOR EACH Y ELEMENT?
        //     }          
        // console.log("Y: ", y)
            
        /*
            print():  Turtle {
  x: 3,
  y: 7,
  direction: 'top',
  allPositions: [
    [ 0, 4 ], [ 1, 4 ],
    [ 2, 4 ], [ 3, 4 ],
    [ 3, 5 ], [ 3, 6 ],
    [ 3, 7 ]
  ]
}*/     
            // I THINK Y SHOULD BE OUTER ARRAY, IT WILL TAKE THE NEWLINE AND GO UP AND DOWN, X WILL NOT TAKE NEWLINE AND STAY HORIZONTAL!
                  // MAYBE IT IS SOMETHING TO DO WITH ALLPOSITIONS, I MUST GO THROUGH EVERY POSITION THE TURTLE HAS TRAVELLED.  ---------
        return this
}
}
// let move = new Turtle(0, 0).forward(3).right().forward(2);

// console.log("allPositions: ", move.positions())

let move = new Turtle(0, 0).forward(3).right().forward(3)
console.log("print(): ", move.print())




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