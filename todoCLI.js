/*

Add
From the Todo Menu pressing n then Enter should ask the user what item to add to the list. The user can then write a response. Save their response as a new item at the end of the todo list.

$ node todoCLI.js

Welcome to Todo CLI!

--------------------

(v) View • ( n ) New • (cX) Complete • (dX) Delete • (q) Quit

> n

What?

>Go hunting for pesky beetles (not the band)

(v) View • ( n ) New • (cX) Complete • (dX) Delete • (q) Quit

>

*/

const fs = require('fs')
const readLine = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
const tasks = []
const emptyCheckbox = '[ ]'
const fullCheckbox = '[\u2713]'

function output() {
    console.log("Welcome to ToDo CLI!")
    console.log("-------------------------")
}


function baseMenu(selectors = ['(v)', '(n)', '(cX)', '(dX)', '(q)'], descriptors = ['View', 'New', 'Complete', 'Delete', 'Quit']) {
    for (s = 0, d =0; s < selectors.length, d < descriptors.length; s++, d++) {
        process.stdout.write(`${selectors[s]}${descriptors[d]}` + " ")
    }
    console.log('\n')
    process.stdout.write('>')
    readLine.on('line', (input) => {
        input = input.toLowerCase()
        //console.log(`Received: ${input}`)
        
        switch (input) {
            case 'v':
                displayTasks()
            case 'n':
                newTask()
            default:
                baseMenu()
        }
        // readLine.close()
    })
}

function displayTasks() {
    const taskNumber = tasks.length
    let checkboxOrNoCheckbox = '[ ]'

    for (i = 0; i < tasks.length; i++) {
        if (tasks.length === 0) {
            console.log("The tasks list is currently empty, please go back to the base menu and input n")
            console.log('\n')
        } else if (tasks.length > 0) {
            console.log(`IN THE VIEW: ${i} ${checkboxOrNoCheckbox} ${tasks[i]}`)
            console.log('\n')
        }

    }
    baseMenu()
}

// function fillCheckMark() {

// }

// function checkIfTaskComplete() {

// }

function newTask() {
    readLine.question("\nPlease input a task: \n", (answer) => {
        if (answer === '') {
            console.log("BLANK TASK INPUT")
        } else if (answer) {
            tasks.push(answer)
            console.log(`${answer} has been successfully inputed as a task, the lists of tasks is now: ${tasks} \n`)
            baseMenu()
        }

    })
}

output()
baseMenu()
// displayTasks()
// newTask()