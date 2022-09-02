let alphabet = 'abcdefghijklmnopqrstuvwxyz';
alphabet = alphabet.toUpperCase()
alphabet = alphabet.split('')
const words = ["BARRACUDA", "BUMBLEBEE", "SEAHORSE", "BADGER", "JAGUAR", "STARFISH", "PELICAN", "ALBATROSS", "BLOWFISH", "CRICKET", "STALLION", "HUMMINGBIRD"]
const answer = words[Math.floor(Math.random() * words.length)]
console.log(answer)
const images = ["../public/images/gallows.jpg", "../public/images/gallows+head.jpg", "../public/images/gallows+head+torso.jpg",
"../public/images/gallows+head+torso+leg.jpg", "../public/images/gallows+head+torso+2leg.jpg", "../public/images/gallows+head+torso+2leg+arm.jpg", "../public/images/gallows+head+torso+2leg+2arm.jpg"]
const lives = images.length
const attachImage = document.getElementById('hangman_image')
let imageIndex = 0
const grabLives = document.getElementById("lives")
let lives_count = images.length - 1
const highlightedButtons = document.querySelectorAll('.highlighted')
const make_clickable = document.getElementsByClassName('button')

if (imageIndex === 0) {
    grabLives.innerText = `Lives: ${lives_count}`
    attachImage.src = images[imageIndex]
    imageIndex += 1
}

function createImage() {
    attachImage.src = images[imageIndex]
    imageIndex += 1
    lives_count -= 1
    grabLives.innerText = `Lives: ${lives_count}`
    const lostAudio = new Audio("../public/sound/mixkit-arcade-fast-game-over-233.wav")

    if (imageIndex === images.length) {
        setTimeout(function() {
            lostAudio.play()
            alert("Oh no you have lost the game!")
            disableGameWhenLost()
        }, 500)
    }
}

// Generate lines for the answer
function generate_horizontal_lines() {
    answerLengthPlusOne = answer.length + 1
    for (i=0; i<answerLengthPlusOne; i++) {
        const horizontal_lines = document.querySelector('.horizontal_lines')
        const spans = horizontal_lines.appendChild(document.createElement('span'));
        spans.innerHTML = "_"
        const spanList = document.getElementsByTagName('span')
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

for (i=0;i<make_clickable.length;i++) {
    make_clickable[i].onclick = function(elem){
        guess = this.innerHTML.toUpperCase()
        checkAnswer(guess)
        preventButtonDefault(make_clickable, guess)
    }
}

function preventButtonDefault(make_clickable, guess) {  
    for (i=0;i<make_clickable.length; i++) {
        if (make_clickable[i].innerText === guess) {
            make_clickable[i].disabled = true
        }
    }
}

// Answer check
function checkAnswer(guess) {
    const charcodesArr = []
    const indexOfGuessedLetterArr = []
    const splitted_answer = answer.split('')

    // Convert each string into charcode and put it into the charcodesArr
    for(let i = 0; i < splitted_answer.length; i++) {
        charcodesArr.push(splitted_answer[i].charCodeAt(splitted_answer[i])) 
    }

    if (answer.includes(guess)) {
        for(i=0; i<splitted_answer.length; i++) {
            if(guess === splitted_answer[i]) {
                // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp
                const findLetter = guess
                const regexSearch = new RegExp(findLetter, 'gi')
            
                // Grab the index/indices of the guessed letter
                while(regexSearch.exec(answer)) {
                    indexOfGuessedLetterArr.push(regexSearch.lastIndex)      
                }
                // Grab the unique chars
                var uniqueChars = [...new Set(indexOfGuessedLetterArr)];
                const guessedLetterArrFixedIndices = uniqueChars.map(index => index - 1)
    
                loopThroughSpans(guessedLetterArrFixedIndices)
            }
        }
    }
    else {
        console.log(guess)
        createImage() 
    }
}

function loopThroughSpans(guessedLetterArrFixedIndices) {
    const grabSpans = document.getElementsByTagName('span')
    const spanIdStringToInt = parseInt(grabSpans[i].id)
    for (i=0; i<grabSpans.length; i++) {
        if (guessedLetterArrFixedIndices[i] != undefined || spanIdStringToInt.id != undefined) {
            matcher(guessedLetterArrFixedIndices, grabSpans)
        }
    }
}

function matcher(guessedLetterArrFixedIndices, grabSpans) {
    const answerContainer = []

    for (i=0; i<grabSpans.length; i++) {
        for (j=0; j<guessedLetterArrFixedIndices.length; j++) {
            if (guessedLetterArrFixedIndices[i] != undefined) {
                findExactSpan = document.getElementById(guessedLetterArrFixedIndices[i])
                findExactSpan.innerText = guess
            }
        }
    }
    for (i = 0; i < spans.length; i++) {
        if (spans[i].innerText != "_") {
            answerContainer.push(1)
        }
    }
    const wonAudio = new Audio("../public/sound/mixkit-male-voice-cheer-2010.wav")
    if (answerContainer.length === answer.length) {
        setTimeout(function() {
            wonAudio.play()
            alert("You have won the game")
            disableGameWhenLost()
        }, 500)
    }
}

function generate_highlighted_class() {
    const allButtons = document.querySelectorAll('.button')
    allButtons.forEach(button => {
        let eventListener = (event) => {
            button.className += " highlighted"
            button.style.backgroundColor = 'orange'
        }
        button.addEventListener('click', eventListener)
    })
}
generate_highlighted_class()

function disableGameWhenLost() {
    for (let i = 0; i < make_clickable.length; i++) {
        make_clickable[i].disabled = true
    }
}