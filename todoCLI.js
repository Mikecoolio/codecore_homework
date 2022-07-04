const fs = require('fs')
const readLine = require('readline')
const emptyCheckbox = '[ ]'
const fullCheckBox = '[\u2713]'
const tasks = []
const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
  });
function output() {
    console.log("Welcome to ToDo CLI!")
    console.log("-------------------------")
}

function baseMenu(taskList = [], phrases) {
    console.log('(v) View • ( n ) New • (cX) Complete • (dX) Delete • (q) Quit')
    console.log('\n')
    rl.question('>', input => {
        let cleanedInput = input.toString().toLowerCase().trim()

        if (cleanedInput === 'v') {
            if (phrases === undefined) {
                displayTasksWithoutUpdating(phrases)
            } else if (phrases != undefined){
                displayTasksV(phrases.sort())
            }
        } else if (cleanedInput === 'n') {
            newTask();
        } else if (cleanedInput.includes('c')) {
            checkTasks(cleanedInput, taskList, phrases)
        } else if (cleanedInput.includes('d')) {
            deleteTask(cleanedInput, taskList, phrases.sort())
        } else if (cleanedInput === 'q') {
            console.log("See you soon! 😄")
            rl.close()
        }
        else {
            console.log(`Option: ${input} is not availible, please choose another option`)
            baseMenu();
        }
    })
}

function deleteTask(input, taskList, phrases) {

    let splittedInput = input.split('')
    let desiredIndexOfTaskToBeUpdated = parseInt(splittedInput[1])

    if (taskList.length > desiredIndexOfTaskToBeUpdated) {
        let updatedDeletedTask = taskList.splice(desiredIndexOfTaskToBeUpdated, 1)
        phrases.splice(desiredIndexOfTaskToBeUpdated, 1)

        console.log(`Deleted ${updatedDeletedTask} \n`)

        baseMenu(taskList, phrases)
    } else {
        baseMenu(taskList, phrases)
    }
}

function checkTasks(input, taskList, phrases) {
    let splittedInput = input.split('')
    let desiredIndexOfTaskToBeUpdated = parseInt(splittedInput[1])

    if (taskList.length > desiredIndexOfTaskToBeUpdated) {
        updatedTask = 
        taskList.splice(desiredIndexOfTaskToBeUpdated, 1, taskList[desiredIndexOfTaskToBeUpdated])
    
        displayTasks([updatedTask, desiredIndexOfTaskToBeUpdated], phrases)
    } else {
        baseMenu(taskList, phrases)
    }
}

function displayTasksWithoutUpdating(phrases) {
    let unfinishedTasks = []
    
    if (tasks.length === 0) {
        console.log('')
        console.log("List is empty...\n")
        baseMenu()
    } else {
        if (phrases === undefined) {
            for (let task in tasks) {
                let singlePhrase = `${task} ${emptyCheckbox} ${tasks[task]} \n`
                unfinishedTasks.push(singlePhrase)
                console.log(singlePhrase)
            }
            baseMenu(tasks, unfinishedTasks)
        } else {
            for (let phrase in phrases) {
                console.log(phrases[phrase])
            }
            baseMenu(tasks, phrases)
        }
    }
}

function displayTasksV(phrases) {
    for (let phrase in phrases) {
        console.log(phrases[phrase])
    }
    baseMenu(tasks, phrases)
}

function displayTasks(update = [], phrases) { 
    let indexOfUpdatedPhrase = update[1]
    let updatedTask = update[0]
    let updatedPhrase = `${indexOfUpdatedPhrase} ${fullCheckBox} ${updatedTask} \n` 
    let listOfTasksWithCheckbox = []
    let phrasesArray = []

    if (tasks.length > 0) {
        for (i = 0; i < tasks.length; i++) {  
            console.log('')
            let phrase = `${i} ${emptyCheckbox} ${tasks[i]} \n`
            listOfTasksWithCheckbox.push(phrase)
        }

        if (update.length = 1) {
            for (i = 0; i < listOfTasksWithCheckbox.length; i++) {
                if (i === indexOfUpdatedPhrase) {
                    listOfTasksWithCheckbox[i] = updatedPhrase
                }
            }        
        }

    if (phrases != undefined && phrases.length > 0) {
        phrasesArray = phrases.concat(listOfTasksWithCheckbox.filter((task) => {
            phrases.indexOf(task) < 0
        }))
    }

    if (phrasesArray[0] === listOfTasksWithCheckbox[0]) {
        for (i=0; i<phrasesArray.length; i++) {
            console.log(phrasesArray[i])
        }
        baseMenu(tasks, phrasesArray)
    } else {
        if (tasks[indexOfUpdatedPhrase] != undefined) {
            console.log(`Completed ${tasks[indexOfUpdatedPhrase]}\n`)
            combineArrays(phrasesArray, listOfTasksWithCheckbox)
        } else {
            console.log(`Completed ${tasks[indexOfUpdatedPhrase]}\n`)
        }
    }
    }
}

function combineArrays(phrasesArray, listOfTasksWithCheckbox) {
    for (let i in tasks) {
        let phrase = `${i} ${emptyCheckbox} ${tasks[i]} \n`
        let updatedPhrase = `${i} ${fullCheckBox} ${tasks[i]} \n` 
        if (phrasesArray.includes(updatedPhrase)) {
            if (listOfTasksWithCheckbox.includes(phrase)) {
                let index = listOfTasksWithCheckbox.indexOf(phrase)
                listOfTasksWithCheckbox.splice(index, 1)
            }
        }
    }

    for (let i in tasks) {
        let phrase = `${i} ${emptyCheckbox} ${tasks[i]} \n`
        let updatedPhrase = `${i} ${fullCheckBox} ${tasks[i]} \n` 
        if (listOfTasksWithCheckbox.includes(updatedPhrase)) {
            if (phrasesArray.includes(phrase)) {
                let index = phrasesArray.indexOf(phrase)
                phrasesArray.splice(index, 1)
            }
        }
    }

    let finalArr = phrasesArray.concat(listOfTasksWithCheckbox)
    let uniqueTasks = [...new Set(finalArr)]

    baseMenu(tasks, uniqueTasks)
}

function newTask() {
    rl.question("\nWhat?\n\n>", (answer) => {
        if (answer === '') {
            console.log("(NO INPUT DETECTED) Please input a task")
            baseMenu(tasks)
        } else if (answer) {
            tasks.push(answer)
            console.log('')
            baseMenu(tasks)
        }
    })
}

output()
baseMenu()