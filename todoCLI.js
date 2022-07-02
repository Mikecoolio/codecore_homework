const fs = require('fs')
const readLine = require('readline')

const rl = readLine.createInterface({
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


function baseMenu(taskList = [], selectors = ['(v)', '(n)', '(cX)', '(dX)', '(q)'], descriptors = ['View', 'New', 'Complete', 'Delete', 'Quit']) {
    console.log("RECIEVED TASKS LIST", taskList)
    for (s = 0, d =0; s < selectors.length, d < descriptors.length; s++, d++) {
        process.stdout.write(`${selectors[s]}${descriptors[d]}` + " ")
    }
    console.log('\n')
    // let arrow = process.stdout.write('>')
    rl.question('>', input => {
        let cleanedInput = input.toString().toLowerCase()
        //console.log(`Received: ${input}`)
        if (cleanedInput === 'v') {
            console.log(`inside v, recieved input: ${cleanedInput}`)
            displayTasks();
        } else if (cleanedInput === 'n') {
            console.log("inside n")
            newTask();
        } else if (cleanedInput.includes('c')) {
            completeTask(cleanedInput, taskList)
        }
        else {
            console.log(`Option: ${input} is not availible, please choose another option`)
            baseMenu();
        }
    })
}

function displayTasks() {
    console.log("tasks.length inside displayTasks()", tasks.length)
    let checkboxOrNoCheckbox = '[ ]'

    if (tasks.length === 0) {
        console.log("List is empty...")
        console.log('\n')
        baseMenu()
    } else if (tasks.length > 0) {
        for (i = 0; i < tasks.length; i++) {  
            console.log(`IN THE VIEW: ${i} ${checkboxOrNoCheckbox} ${tasks[i]} \n`)
        }
        baseMenu()
    }
}

function completeTask(input, taskList) {
  console.log("taskList inside completeTask", taskList)
  console.log("input inside completeTask", input)

  inputSplitted = input.split('')
  let indexOfTask = parseInt(inputSplitted[1])

  console.log(taskList[indexOfTask])

  baseMenu()
}

function newTask() {
    rl.question("\nPlease input a task: \n", (answer) => {
        if (answer === '') {
            console.log("BLANK TASK INPUT")
        } else if (answer) {
            tasks.push(answer)
            console.log(`${answer} has been successfully inputed as a task, the lists of tasks is now: ${tasks} \n`)
            baseMenu(tasks)
        }

    })
}

// // function fillCheckMark() {

// // }

// // function checkIfTaskComplete() {

// // }



output()
baseMenu()
// // displayTasks()
// // newTask()