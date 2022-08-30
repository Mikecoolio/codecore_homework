let alphabet = 'abcdefghijklmnopqrstuvwxyz';
alphabet = alphabet.toUpperCase()
alphabet = alphabet.split('')
str = '\u0073\u0332' // = 's̲'
// unicode letters a-y (lowercase) range = U+0061 - U+0079
// z (lowercase) is U+007A

let answer = "system"

// Generate lines for the answer
function generate_horizontal_lines() {
    answer_arr = answer.split("")
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
const buttons = document.querySelectorAll('button')
buttons.forEach(button => {
    button.className = 'button'
});

// Mkae buttons clickable
let spans = document.getElementsByTagName('span')
for (i=0;i<spans.length;i++) {
    spans[i].className = 'span'
}

const make_clickable = document.getElementsByClassName('button')
for (i=0;i<make_clickable.length;i++) {
    make_clickable[i].onclick = function(elem){
        guess = this.innerHTML.toLowerCase()
        console.log(`Clicked ${guess}`)
        checkAnswer(guess)
    }
}

// Answer check
function checkAnswer(guess) {
    console.log(`The guess is ${guess}`)
    splitted_answer = answer.split('')
    for(i=0; i<splitted_answer.length; i++) {
        console.log(splitted_answer[i]) 
        console.log("i", i)
        if(guess === splitted_answer[i]) {
            // answer_arr[i] = ''

            // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp
            let findLetter = guess
            let regexSearch = new RegExp(findLetter, 'gi')
            indexOfGuessedLetterArr = []

            // Grab the index/indices of the guessed letter
            while(regexSearch.exec(answer)) {
                indexOfGuessedLetterArr.push(regexSearch.lastIndex)
            }
            console.log(`GUESSED RIGHT LETTER: ${splitted_answer[i]}`)
            spans[0].innerText = str
            console.log("index of answer", answer.indexOf(guess))
        }
        guessedLetterArrFixedIndices = indexOfGuessedLetterArr.map(index => index - 1)
        console.log("index of guessed letter", guessedLetterArrFixedIndices)
    }
}

function get_elem_by_id() {
    let spans = document.getElementsByTagName('span')

    for (i=0;i<spans.length;i++) {
        let element = document.getElementById(`${i}`)//[i]
        console.log("element", element.innerHTML)
    }
}
get_elem_by_id()

// Lives check
function livesChecker(minus_a_life) {
    let default_lives = 10

    if (minus_a_life === 1) {
        default_lives -= 1
    }
    console.log(`The player has ${default_lives} remaining`)
}


