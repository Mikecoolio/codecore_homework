let alphabet = 'abcdefghijklmnopqrstuvwxyz';
let result = []
alphabet = alphabet.toUpperCase()
alphabet = alphabet.split('')
str = '\u0073\u0332' // = 's̲'

let answer = "system"

// Generate lines for the answer
function generate_horizontal_lines() {
    answer_arr = answer.split("")
    console.log("answer_arr.length inside generate_horizontal_lines", answer_arr.length)
    console.log("answer.length inside generate_horizontal_lines", answer.length)
    for (i=0; i<answer.length; i++) {
        const horizontal_lines = document.querySelector('.horizontal_lines')
        let spans = horizontal_lines.appendChild(document.createElement('span'));
        spans.innerHTML = "_"
        let spanList = document.getElementsByTagName('span')
        for (i=0; i<spanList.length; i++) {
            spanList[i].id = `${i}`
        }
    }
}
generate_horizontal_lines()

// Generate buttons
for (i=0;i<alphabet.length;i++) {
    guess_the_word_header = document.querySelector('.guess_the_word_header')
    guess_the_word_header.appendChild(document.createElement('button')).innerText = alphabet[i].toUpperCase()
}

// Give class name to "button" to each button
const buttons = document.querySelectorAll('button')
buttons.forEach(button => {
    button.className = 'button'
});

// Make buttons clickable
let spans = document.getElementsByTagName('span')
for (i=0;i<spans.length;i++) {
    spans[i].className = 'span'
}


const make_clickable = document.getElementsByClassName('button')
for (i=0;i<make_clickable.length;i++) {
    make_clickable[i].onclick = function(elem){
        guess = this.innerHTML.toLowerCase()
        checkAnswer(guess)
    }
}

// Answer check
function checkAnswer(guess) {
    let charcodesArr = []
    let indexOfGuessedLetterArr = []

    let splitted_answer = answer.split('')

    // Convert each string into charcode and put it into the charcodesArr
    for(let i = 0; i < splitted_answer.length; i++) {
        charcodesArr.push(splitted_answer[i].charCodeAt(splitted_answer[i])) 
    }

    for(i=0; i<splitted_answer.length; i++) {
        if(guess === splitted_answer[i]) {
            // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp
            let findLetter = guess
            let regexSearch = new RegExp(findLetter, 'gi')
        
            // Grab the index/indices of the guessed letter
            while(regexSearch.exec(answer)) {
                indexOfGuessedLetterArr.push(regexSearch.lastIndex)      
            }
            // Grab the unique chars
            var uniqueChars = [...new Set(indexOfGuessedLetterArr)];
            // the line below sets the answer to the html elem
        }
        else {
            console.log("WRONG LETTER inside checkAnswer")       
        }
    }


    function renderLetterToDom() {
        for(i=0; i<splitted_answer.length; i++) {       
            if(guess === splitted_answer[i]) {
                var guessedLetterArrFixedIndices = uniqueChars.map(index => index - 1)

                loopThroughSpans(guess, guessedLetterArrFixedIndices)
            }
            else {
                console.log("LETTER WRONG inside renderLetterToDom")
            }
    
        }
    }
    renderLetterToDom()

    function loopThroughSpans(letter, guessedLetterArrFixedIndices) {
        let grabSpans = document.getElementsByTagName('span')
        let spanIdStringToInt = parseInt(grabSpans[i].id)
        for (i=0; i<grabSpans.length; i++) {
            if (guessedLetterArrFixedIndices[i] != undefined || spanIdStringToInt.id != undefined) {
                console.log("guessedLetterArrFixedIndices inside loopThroughSpans before sending to matcher", guessedLetterArrFixedIndices)
                matcher(guessedLetterArrFixedIndices, grabSpans)
            }
        }

    }
    
    function matcher(guessedLetterArrFixedIndices, grabSpans) {
        for (i=0; i<grabSpans.length; i++) {
            console.log("grabSpans[i]", grabSpans[i])
            for (j=0; j<guessedLetterArrFixedIndices.length; j++) {
                if (guessedLetterArrFixedIndices[i] != undefined) {
                    console.log("guessedLetterArrFixedIndices inside for loop inside if statement", guessedLetterArrFixedIndices[i])
                    console.log("guess", guess)
                         
                    findExactSpan = document.getElementById(guessedLetterArrFixedIndices[i])
                    console.log("findExactSpan inside matcher", findExactSpan)
                    console.log("findExactSpan.id", findExactSpan.id)
                    findExactSpan.innerText = guess
                }
            }
        }
    }
}

function processAdditionalIndex(indexArr) {
    console.log("indexArr", indexArr)
}

// Lives Check
function livesChecker(minus_a_life) {
    let default_lives = 10

    if (minus_a_life === 1) {
        default_lives -= 1
    }
    console.log(`The player has ${default_lives} remaining`)
}


const allButtons = document.querySelectorAll('.button')

allButtons.forEach(button => {
    let eventListener = (event) => {
        button.style.backgroundColor = 'orange'
    }
    button.addEventListener('click', eventListener)
})

$('.button').on('click', function(event) {
    event.preventDefault()
})