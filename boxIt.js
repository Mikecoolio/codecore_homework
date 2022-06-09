#! /usr/bin/env node

const horizontalLine = '\u2501'
const topRightCorner = '\u2513'
const topLeftCorner = '\u250F' 
const bottomLeftCorner = '\u2517'
const bottomRightCorner = '\u251B' 
const leftMiddle = '\u2523'
const rightMiddle = '\u252B'
const verticalLine = '\u2503'
const capturedUserInput = process.argv

function drawLine(num) {
    let combinedLine = ''
    for (let i = 0; i < num; i++) {
        combinedLine += horizontalLine
    }
    return combinedLine
}

function drawTopBorder(num) {
    let finishedTopBorder = ''
    if (num === 0) {
        return finishedTopBorder += topLeftCorner + topRightCorner
    } else {
         return finishedTopBorder += topLeftCorner + drawLine(num) + topRightCorner
    }
}

function drawMiddleBorder(num) {
    let finishedMiddleBorder = ''
    if (num === 0) {
        return finishedMiddleBorder += leftMiddle + rightMiddle
    } else {
         return finishedMiddleBorder += leftMiddle + drawLine(num) + rightMiddle
    }
}

function drawBottomBorder(num) {
    let finishedBottomBorder = ''
    if (num === 0) {
        return finishedBottomBorder += bottomLeftCorner + bottomRightCorner
    } else {
         return finishedBottomBorder += bottomLeftCorner + drawLine(num) + bottomRightCorner
    }
}

function drawBarsAround(str) {
    return verticalLine + str + verticalLine
}

function boxIt(arrOfStr) {
    let completedBox = ''

    for (i = 0; i < arrOfStr.length; i++) {
        completedBox = drawTopBorder(arrOfStr[i].length) + `\n` + drawBarsAround(arrOfStr[i]) + `\n` + drawBottomBorder(arrOfStr[i].length)
        console.log(completedBox)
    }
    return completedBox
}

function handleUserInput(processArr) {
    let userInputArr = []
    if (processArr.length <= 2) {
        let noMiddle = drawTopBorder(0) + `\n` + drawBottomBorder(0)
        console.log(noMiddle)
    } else {
        for (i = 2; i < capturedUserInput.length; i++) {
            if (capturedUserInput[i] != undefined) {
                userInputArr.push(capturedUserInput[i])
            }
        }
    }
    boxIt(userInputArr)
}

handleUserInput(capturedUserInput)


