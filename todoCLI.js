/*
View
From the Todo Menu, pressing v then Enter should display the contents of the todo list then the Todo Menu again. See the example below.

$ node todoCLI.js

Welcome to Todo CLI!

--------------------

(v) View • ( n ) New • (cX) Complete • (dX) Delete • (q) Quit

> v

0 [✓] Take out the trash

1 [✓] Buy toothpaste

2 [ ] Buy Snickerdoodles

3 [ ] Fix the climate

4 [ ] Find a cure for aging

(v) View • ( n ) New • (cX) Complete • (dX) Delete • (q) Quit

>

*/

const fs = require('fs')
const readLine = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
const selectors = ['(v)', '(n)', '(cX)', '(dX)', '(q)']
const descriptors = ['View', 'New', 'Complete', 'Delete', 'Quit']
const tasks = ['task1', 'task2', 'task3', 'task4']
const emptyCheckbox = '[ ]'
const fullCheckbox = '[\u2713]'

function output() {
    console.log("Welcome to ToDo CLI!")
    console.log("-------------------------")
}


function baseMenu(selectors, descriptors) {
    for (s = 0, d =0; s < selectors.length, d < descriptors.length; s++, d++) {
        process.stdout.write(`${selectors[s]}${descriptors[d]}` + " ")
    }
    console.log('\n')
    process.stdout.write('>')
    readLine.on('line', (input) => {
        input = input.toLowerCase()
        console.log(`Received: ${input}`)
        if (input === 'v') {
            displayTasks()
        } else {
             baseMenu(selectors, descriptors)
        }
        // readLine.close()
    })
}

function displayTasks() {
    const taskNumber = tasks.length
    let checkboxOrNoCheckbox = '[ ]'

    for (i = 0; i < tasks.length; i++) {
        console.log(`${i} ${checkboxOrNoCheckbox} ${tasks[i]}`)
        console.log('\n')
    }
    baseMenu(selectors, descriptors)
}

// function fillCheckMark() {

// }

// function checkIfTaskComplete() {

// }

output()
baseMenu(selectors, descriptors)
// displayTasks()