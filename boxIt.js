#! /usr/bin/env node

let horizontalLine = '\u2501'
let topRightCorner = '\u2513'
let topLeftCorner = '\u250F' 
let bottomLeftCorner = '\u2517'
let bottomRightCorner = '\u251B' 
let leftMiddle = '\u2523'
let rightMiddle = '\u252B'
let verticalLine = '\u2503'
let captureUserInput = process.argv

console.log("captureUserInput", captureUserInput, captureUserInput.length)
function drawLine(num) {
    let combinedLine = ''
    for (let i = 0; i < num; i++) {
        combinedLine += horizontalLine
    }
    return combinedLine
}

console.log("horizontal lines", drawLine(8))



function drawTopBorder(num) {
    let finishedTopBorder = ''
    if (num === 0) {
        return finishedTopBorder += topLeftCorner + topRightCorner
    } else {
         return finishedTopBorder += topLeftCorner + drawLine(num) + topRightCorner
    }
}

console.log("top border", drawTopBorder(0))
console.log("top border", drawTopBorder(4))



function drawMiddleBorder(num) {
    let finishedMiddleBorder = ''
    if (num === 0) {
        return finishedMiddleBorder += leftMiddle + rightMiddle
    } else {
         return finishedMiddleBorder += leftMiddle + drawLine(num) + rightMiddle
    }
}

console.log('middle border', drawMiddleBorder(0))
console.log('middle border', drawMiddleBorder(8))



function drawBottomBorder(num) {
    let finishedBottomBorder = ''
    if (num === 0) {
        return finishedBottomBorder += bottomLeftCorner + bottomRightCorner
    } else {
         return finishedBottomBorder += bottomLeftCorner + drawLine(num) + bottomRightCorner
    }
}

console.log("bottom border", drawBottomBorder(2))



function drawBarsAroud(str) {
    return verticalLine + str + verticalLine
}

console.log(drawBarsAroud("My name is Dan"))
console.log(drawBarsAroud("You are Jane  "))
console.log(drawBarsAroud("  You are Bill"))



function boxIt(arrOfStr) {
    let completedBox = ''

    for (i = 0; i < arrOfStr.length; i++) {
        completedBox = drawTopBorder(arrOfStr[i].length) + `\n` + drawBarsAroud(arrOfStr[i]) + `\n` + drawBottomBorder(arrOfStr[i].length)
        console.log(completedBox)
    }
    return completedBox
}

//console.log(boxIt(['Jon Snow', 'Cersei Lannister']))


function captureInput(processArr) {
    let userInputArr = []
    if (processArr.length <= 2 || processArr.length === undefined) {
        let noMiddle = drawTopBorder(0) + `\n` + drawBottomBorder(0)
        console.log(noMiddle)
    } else {
        for (i = 2; i < captureUserInput.length; i++) {
            if (captureUserInput[i] != [] || undefined) {
                console.log("captureUserInput[i]", captureUserInput[i])
                userInputArr.push(captureUserInput[i])
                console.log("userInputArr", userInputArr)
            }
        }
    }

    boxIt(userInputArr)
}

captureInput(captureUserInput)


