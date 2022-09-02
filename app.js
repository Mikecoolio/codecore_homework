let alphabet = 'abcdefghijklmnopqrstuvwxyz';
alphabet = alphabet.toUpperCase()
alphabet = alphabet.split('')
let words = ["BARRACUDA", "BUMBLEBEE", "SEAHORSE", "BADGER", "JAGUAR", "STARFISH", "PELICAN", "ALBATROSS", "BLOWFISH", "CRICKET", "STALLION", "HUMMINGBIRD"]
let answer = words[Math.floor(Math.random() * words.length)]
console.log("answer: " + answer)
let images = ["../public/images/gallows.jpg", "../public/images/gallows+head.jpg", "../public/images/gallows+head+torso.jpg",
"../public/images/gallows+head+torso+leg.jpg", "../public/images/gallows+head+torso+2leg.jpg", "../public/images/gallows+head+torso+2leg+arm.jpg", "../public/images/gallows+head+torso+2leg+2arm.jpg"]
let lives = images.length
console.log("lives", lives)
let attachImage = document.getElementById('hangman_image')
let imageIndex = 0

if (imageIndex === 0) {
    attachImage.src = images[imageIndex]
    imageIndex += 1
}
console.log("imageIndex", imageIndex)

function createImage() {
    attachImage.src = images[imageIndex]
    imageIndex += 1
    
    let lostAudio = new Audio("../public/sound/mixkit-arcade-fast-game-over-233.wav")

    console.log("imageIndex within createImage()", imageIndex)
    console.log("images.length within createImage()", images.length)

    if (imageIndex === images.length) {
        setTimeout(function() {
            lostAudio.play()
            alert("OH NOVOS YOU LOST")
        }, 500)
    }
}

// Generate lines for the answer
function generate_horizontal_lines() {
    answerLengthPlusOne = answer.length + 1
    for (i=0; i<answerLengthPlusOne; i++) {
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
        guess = this.innerHTML.toUpperCase()
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

    if (answer.includes(guess)) {
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
                let guessedLetterArrFixedIndices = uniqueChars.map(index => index - 1)
    
                loopThroughSpans(guessedLetterArrFixedIndices)
            }
        }
    }
    else {
        console.log("WRONG LETTER inside checkAnswer")  
        createImage()    
        // console.log("createImage", createImage)
    }
}

function loopThroughSpans(guessedLetterArrFixedIndices) {
    let grabSpans = document.getElementsByTagName('span')
    let spanIdStringToInt = parseInt(grabSpans[i].id)
    for (i=0; i<grabSpans.length; i++) {
        if (guessedLetterArrFixedIndices[i] != undefined || spanIdStringToInt.id != undefined) {
            // console.log("guessedLetterArrFixedIndices inside loopThroughSpans before sending to matcher", guessedLetterArrFixedIndices)
            matcher(guessedLetterArrFixedIndices, grabSpans)
        }
    }
}

function matcher(guessedLetterArrFixedIndices, grabSpans) {
    let answerContainer = []

    for (i=0; i<grabSpans.length; i++) {
        console.log("grabSpans[i]", grabSpans[i])
        for (j=0; j<guessedLetterArrFixedIndices.length; j++) {
            if (guessedLetterArrFixedIndices[i] != undefined) {
                // console.log("guessedLetterArrFixedIndices inside for loop inside if statement", guessedLetterArrFixedIndices[i])
                // console.log("guess", guess)
                     
                findExactSpan = document.getElementById(guessedLetterArrFixedIndices[i])
                // console.log("findExactSpan inside matcher", findExactSpan)
                // console.log("findExactSpan.id", findExactSpan.id)
                findExactSpan.innerText = guess
            }
        }
    }
    for (i = 0; i < spans.length; i++) {
        // console.log("SPANS INNER TEXT", spans[i].innerText)
        if (spans[i].innerText != "_") {
            console.log(`${spans[i].innerText} DOES NOT EQUAL _`)
            answerContainer.push(1)
        }
    }
    console.log("answerContainer", answerContainer)
    console.log("answerContainer.length", answerContainer.length)
    console.log("answer.length", answer.length)
    let wonAudio = new Audio("../public/sound/mixkit-male-voice-cheer-2010.wav")
    if (answerContainer.length === answer.length) {
        setTimeout(function() {
            wonAudio.play()
            alert("You have won the game")
        }, 500)
    }
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

