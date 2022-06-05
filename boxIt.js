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

