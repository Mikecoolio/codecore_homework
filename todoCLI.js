const fs = require('fs')
const readLine = require('readline')
const emptyCheckbox = '[ ]'
const fullCheckBox = '[\u2713]'
const tasks = []
const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
  });
const phrases = []

function output() {
    console.log("Welcome to ToDo CLI!")
    console.log("-------------------------")
}

function baseMenu(taskList = [], phrases, selectors = ['(v)', '(n)', '(cX)', '(dX)', '(q)'], descriptors = ['View', 'New', 'Complete', 'Delete', 'Quit']) {
    console.log('phrases inside baseMenu', phrases)
    console.log("RECIEVED TASKS LIST", taskList)
    for (s = 0, d =0; s < selectors.length, d < descriptors.length; s++, d++) {
        process.stdout.write(`${selectors[s]}${descriptors[d]}` + " ")
    }
    console.log('\n')
    rl.question('>', input => {
        let cleanedInput = input.toString().toLowerCase().trim()

        if (cleanedInput === 'v') {
            console.log(`inside v, recieved input: ${cleanedInput}`)
            console.log('v is recieving from phrases inide baseMenu', phrases)
            displayTasks(phrases)
        } else if (cleanedInput === 'n') {
            console.log("inside n")
            newTask();
        } else if (cleanedInput.includes('c')) {
            console.log('inside c')
            checkTasks(cleanedInput, taskList, phrases)
            // need to code a checker function that checks if the number attached beside c exceeds the length of the taskList index or not
        } else if (cleanedInput.includes('d')) {
            deleteTask(cleanedInput, taskList)
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

function deleteTask(input, taskList) {
    let splittedInput = input.split('')
    let desiredIndexOfTaskToBeUpdated = parseInt(splittedInput[1])


    if (taskList.length > desiredIndexOfTaskToBeUpdated) {
        updatedDeletedTask = taskList.splice(desiredIndexOfTaskToBeUpdated, 1)
        console.log(`Deleted ${updatedDeletedTask}}`)
        console.log("taskList after deleting desired task", taskList)
        baseMenu(taskList)
    } else {
        baseMenu(taskList)
    }
}

function checkTasks(input, taskList, phrases) {
    console.log('phrases inside checkTasks', phrases)
    let splittedInput = input.split('')
    let desiredIndexOfTaskToBeUpdated = parseInt(splittedInput[1])
    // console.log("splittedInput", splittedInput)
    console.log("desiredIndexOfTaskToBeUpdated", desiredIndexOfTaskToBeUpdated)

    if (taskList.length > desiredIndexOfTaskToBeUpdated) {
        // console.log("desiredIndexOfTaskToBeUpdated", desiredIndexOfTaskToBeUpdated)
        // //console.log("taskList[desiredIndexOfTaskToBeUpdated]", taskList[desiredIndexOfTaskToBeUpdated])
        // console.log(`Completed ${taskList[desiredIndexOfTaskToBeUpdated]}`)
        
        updatedTaskList = 
        taskList.splice(desiredIndexOfTaskToBeUpdated, 1, taskList[desiredIndexOfTaskToBeUpdated])
        console.log("updatedTaskList", updatedTaskList[0])
    
        console.log(`Completed ${taskList[desiredIndexOfTaskToBeUpdated]}`)
        //console.log(`IN THE VIEW: ${desiredIndexOfTaskToBeUpdated} ${fullCheckBox} ${taskList[desiredIndexOfTaskToBeUpdated]} \n`)
    
        displayTasks([updatedTaskList, desiredIndexOfTaskToBeUpdated], phrases)
    } else {
        baseMenu(taskList)
    }
}

function displayTasks(update = [], phrases) { 
    let indexOfUpdatedPhrase = update[1]
    let updatedTask = update[0]
    let updatedPhrase = `IN THE VIEW: ${indexOfUpdatedPhrase} ${fullCheckBox} ${updatedTask} \n` 
    let listOfTasksWithCheckbox = []
    console.log('phrases inside displayTasks', phrases)
    console.log('listOfTasksWithCheckbox inside displayTasks before conditional', listOfTasksWithCheckbox)
    let phrasesArray = []
    // console.log("updatedPhrase", updatedPhrase)
    // console.log("indexOfUpdatedPhrase", typeof indexOfUpdatedPhrase)
    // console.log("tasks.length inside displayTasks()", tasks.length)

    if (tasks.length === 0) {
        console.log("List is empty...")
        console.log('\n')
        baseMenu()
    } else if (tasks.length > 0) {
        for (i = 0; i < tasks.length; i++) {  
            let phrase = `IN THE VIEW: ${i} ${emptyCheckbox} ${tasks[i]} \n`
            listOfTasksWithCheckbox.push(phrase)
        }

        if (update.length = 1) {
            for (i = 0; i < listOfTasksWithCheckbox.length; i++) {
                if (i === indexOfUpdatedPhrase) {
                    listOfTasksWithCheckbox[i] = updatedPhrase
                }
            }        
        }

    if (phrases != undefined && phrases.length > 0) { // the same output as phases
        phrasesArray = phrases.concat(listOfTasksWithCheckbox.filter((task) => {
            phrases.indexOf(task) < 0
        }))
    }
    console.log("phrasesArray inside displayTasks", phrasesArray)
    console.log("listOfTasksWithCheckbox inside displayTasks after conditional", listOfTasksWithCheckbox)

    combineArrays(phrasesArray, listOfTasksWithCheckbox)

    // let combinedArrays =
    // combineArrays(phrasesArray, listOfTasksWithCheckbox)
    // console.log("output of combineArrays() inside displayTasks()", combinedArrays)
        // listOfTasksWithCheckbox[indexOfUpdatedPhrase] = updatedPhrase
        // let joined = listOfTasksWithCheckbox.join('')
        // console.log("joined:", joined)
        //console.log(completedTasks.join(''))
        // baseMenu(tasks, listOfTasksWithCheckbox)
    }
}

function combineArrays(phrasesArray, listOfTasksWithCheckbox) {
    console.log("phrasesArray inside combineArrays: ", phrasesArray)
    console.log("listOfTasksWithCheckbox inside combineArrays: ", listOfTasksWithCheckbox)

    for (let i in tasks) {
        let phrase = `IN THE VIEW: ${i} ${emptyCheckbox} ${tasks[i]} \n`
        let updatedPhrase = `IN THE VIEW: ${i} ${fullCheckBox} ${tasks[i]} \n` 
        if (phrasesArray.includes(updatedPhrase)) {
            if (listOfTasksWithCheckbox.includes(phrase)) {
                let index = listOfTasksWithCheckbox.indexOf(phrase)
                listOfTasksWithCheckbox.splice(index, 1)
            }
        }
    }

    for (let i in tasks) {
        let phrase = `IN THE VIEW: ${i} ${emptyCheckbox} ${tasks[i]} \n`
        let updatedPhrase = `IN THE VIEW: ${i} ${fullCheckBox} ${tasks[i]} \n` 
        if (listOfTasksWithCheckbox.includes(updatedPhrase)) {
            if (phrasesArray.includes(phrase)) {
                let index = phrasesArray.indexOf(phrase)
                phrasesArray.splice(index, 1)
            }
        }
    }

    let finalArr = phrasesArray.concat(listOfTasksWithCheckbox)

    console.log("finalArr inside combineArrays: ", finalArr)

    for (i=0; i<finalArr.length; i++) {
        console.log(finalArr[i])
    }
    // console.log('phrasesArray inside combineArrays after splicing', phrasesArray)
    // console.log("listOfTasksWithCheckbox inside combineArrays after splicing", listOfTasksWithCheckbox)
    baseMenu(tasks, finalArr)
}

function newTask() {
    rl.question("\nPlease input a task: \n", (answer) => {
        if (answer === '') {
            console.log("BLANK TASK INPUT")
            baseMenu(tasks)
        } else if (answer) {
            tasks.push(answer)
            console.log(`${answer} has been successfully inputed as a task, the lists of tasks is now: ${tasks} \n`)
            baseMenu(tasks)
        }

    })
}

output()
baseMenu()