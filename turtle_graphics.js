const emptyBox = '\u25A2' // box representation
const blackBox = "\u25A0"

class Turtle {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.direction = "right"; // default is facing right along the X axis
        this.allPositions = [[this.x, this.y]] // Array must be initialized in the contructor, for the point pair arrays to be added persistently
    }

    findMax(twoDArr) {
        let xCoords = []
        let yCoords = []

        let twoDArrFlat = twoDArr.flat()
        for (let i = 0; i < twoDArr.length; i++) {
            if (i % 2 === 0) {
                let oddIndexElements = twoDArrFlat.pop(twoDArrFlat[i])
                yCoords.push(oddIndexElements)
            } else {
                let evenIndexElements = twoDArrFlat.pop(twoDArrFlat[i])
                xCoords.push(evenIndexElements)
            }
        }

        let maxNumX = xCoords[0]
        let maxNumY = yCoords[0]  
        
        for (let y = 0; y < yCoords.length; y++) { 
            yCoords[y] = Math.abs(yCoords[y])
        }

        for (let i = 1; i < xCoords.length; i++) {
            if (xCoords[i] > maxNumX) {
                maxNumX = xCoords[i]
            }
        }

        for (let a = 1; a < yCoords.length; a++) {
            if (yCoords[a] > maxNumY) {
                maxNumY = yCoords[a]
            }
        }

        return [maxNumX, maxNumY]
    }

    getDefaultDirection() {return this.direction}


    forward(steps) {
        let recordPositions = []
        let currentDirection = this.getDefaultDirection()

        for (let i = 0; i < steps; i++) { 
            if (currentDirection === 'right') { 
                this.x += 1;
            } else if (currentDirection === 'left') { 
                this.x -= 1;
            } else if (currentDirection === 'up') {
                this.y += 1;
            } else if (currentDirection === 'down') { 
                this.y -= 1;
            }
            recordPositions = [this.x, this.y]
    
            this.allPositions.push(recordPositions)
        }
        return this
    }

    right() {
        if (this.direction === 'right') {
            this.direction = 'down';

        } else if (this.direction === 'left') {
            this.direction = 'up';

        } else if (this.direction === 'up') {
            this.direction = 'right';

        } else if (this.direction === 'down') { 
            this.direction = 'left';
        }
        return this
    }

    left() {
        if (this.direction === 'right') {
            this.direction = 'up';

        } else if (this.direction === 'left') {
            this.direction = 'down';

        } else if (this.direction === 'up') {
            this.direction = 'left';

        } else if (this.direction === 'down') { 
            this.direction = 'right';
        }
        return this
    }

    positions() {
        return this.allPositions 
    }

    // LOL https://stackoverflow.com/questions/6157497/node-js-printing-to-console-without-a-trailing-newline
    // I HAD NO IDEA CONSOLE LOG PUTS A NEW LINE AT THE END OF THE LOG, I NEEDED TO USE process.stdout.write ALL THIS TIME LMAO!!
    print() {        
        let allPositions = this.allPositions
        let twoDArrStr = JSON.stringify(allPositions)
        let maximumXAndY = this.findMax(allPositions) 
        
        for (let y = 0; y <= maximumXAndY[1]; y++) {
            for (let x = 0; x <= maximumXAndY[0]; x++) {
                let twoDeepArray = JSON.stringify([x, y]) 
                if (twoDArrStr.includes(twoDeepArray) === true) {
                    process.stdout.write(blackBox + " ");
                } else {
                    process.stdout.write(emptyBox + " ");
                    
                        
                }
            }
            console.log("\n")
        }

    }
}

let move = new Turtle(0, 0)
 move.forward(3)
 .left()
 .forward(3)
 .right()
 .forward(5)
 .right()
 .forward(8)
 .right()
 .forward(5)
 .right()
 .forward(3)
 .left()
 .forward(3)
console.log("print(): ", move.print())






