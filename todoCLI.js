/*
Write an interactive CLI todo list application using Node's readline and fs modules. The following describes what each action does. It would be best to implement each action as its own function.

The Menu
When the todoCLI.js is first executed, a menu as shown below should be displayed. These are all the options the user should be able to perform.

$ node todoCLI.js

Welcome to Todo CLI!

--------------------

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

function output() {
    console.log("Welcome to ToDo CLI!")
    //process.stdout.write("Welcome to ToDo CLI!")
    console.log("-------------------------")
}

output()

function menuComponents(selectors, descriptors) {
    for (s = 0, d =0; s < selectors.length, d < descriptors.length; s++, d++) {
        process.stdout.write(`${selectors[s]}${descriptors[d]}` + " ")
    }
    console.log('\n')
    process.stdout.write('>')
    readLine.on('line', (input) => {
        console.log(`Received: ${input}`)
        readLine.close()
    })
}

menuComponents(selectors, descriptors)

