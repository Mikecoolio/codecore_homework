let horizontalLine = '\u2501'
let topRightCorner = '\u2513'
let topLeftCorner = '\u250F' 
let bottomLeftCorner = '\u2517'
let bottomRightCorner = '\u251B' 
let verticalLine = '\u2503'

function drawLine(num) {
    let combinedLine = ''
    for (let i = 0; i < num; i++) {
        combinedLine += horizontalLine
    }
    return combinedLine
}

console.log("horizontal lines", drawLine(8))

/* 
Write three functions: drawTopBorder, drawMiddleBorder and drawBottomBorder. 
Each function should take a number, return a line of length includingcorner pieces. 
You can make use of drawLine to implement these functions.



Example usage:



drawTopBorder(4) // returns '┏━━━━┓'
drawTopBorder(0) // returns '┏┓'


drawMiddleBorder(8) // returns '┣━━━━━━━━━┫'
drawMiddleBorder(0) // returns '┣┫'


drawBottomBorder(2) // returns '┗━━┛' 
*/

function drawTopBorder(num) {
    let finishedTopBorder = ''
    if (num === 0) {
        return finishedTopBorder += '\u250F' + '\u2513'
    } else {
         return finishedTopBorder += '\u250F' + drawLine(num) + '\u2513'
    }
}

console.log("top border", drawTopBorder(4))

function drawMiddleBorder(num) {
    let finishedMiddleBorder = ''
    
}

console.log('middle border', drawMiddleBorder)

function drawBottomBorder(num) {
    let finishedBottomBorder = ''
    if (num === 0) {
        return finishedBottomBorder += '\u2517' + '\u251B'
    } else {
         return finishedBottomBorder += '\u2517' + drawLine(num) + '\u251B'
    }
}

console.log("bottom border", drawBottomBorder(2))