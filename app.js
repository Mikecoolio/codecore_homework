// const { result } = require("lodash");

let alphabet = 'abcdefghijklmnopqrstuvwxyz';
let result = []
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
    let charcodesArr = []
    let indexOfGuessedLetterArr = []
    // let ArrForConvertingFromCharcodeToStr = []

    console.log(`The guess is ${guess}`)
    splitted_answer = answer.split('')

    // Convert each string into charcode and put it into the charcodesArr
    for(let i = 0; i < splitted_answer.length; i++) {
        charcodesArr.push(splitted_answer[i].charCodeAt(splitted_answer[i])) 
        console.log("charcodesArr", charcodesArr)   
    }
    // console.log("ArrForConvertingFromCharcodeToStr", ArrForConvertingFromCharcodeToStr)


    for(i=0; i<splitted_answer.length; i++) {
        // console.log(splitted_answer[i]) 
        // console.log("i", i)
        if(guess === splitted_answer[i]) {
            console.log("RIGHT LETTER", guess)
            // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp
            let findLetter = guess
            let regexSearch = new RegExp(findLetter, 'gi')
        
            // Grab the index/indices of the guessed letter
            while(regexSearch.exec(answer)) {
                indexOfGuessedLetterArr.push(regexSearch.lastIndex)      
            }
            // Grab the unique chars
            var uniqueChars = [...new Set(indexOfGuessedLetterArr)];
            // console.log("uniqueChars", uniqueChars)
            // console.log(`GUESSED RIGHT LETTER: ${splitted_answer[i]}`)
            // the line below sets the answer to the html elem

            // spans[0].innerText = guess 
        }
        else {
            console.log("WRONG LETTER")       
        }
    }


    function renderLetterToDom() {
        for(i=0; i<splitted_answer.length; i++) {    
            // console.log("splitted_answer.length", splitted_answer.length)    
            if(guess === splitted_answer[i]) {
                var guessedLetterArrFixedIndices = uniqueChars.map(index => index - 1)
                // console.log("i", i)
                // console.log("guess", guess)
                // console.log("index of guessed letter", guessedLetterArrFixedIndices[i - 1])

                // console.log("typeof guessedLetterArrFixedIndices",typeof guessedLetterArrFixedIndices[i - 1]) // number
                // console.log("index of guessed letter (guessedLetterArrFixedIndices[i])", guessedLetterArrFixedIndices[i])
                // console.log("typeof guessedLetterArrFixedIndices[i]", typeof guessedLetterArrFixedIndices[i])
                // for (i=0; i<guessedLetterArrFixedIndices.length; i++) {

                    // if (parseInt(grabSpans[i].id) === guessedLetterArrFixedIndices[i]) {
                    //     console.log("MATCHES")
                    //     console.log(grabSpans[i])
                    //     // grabSpans[i].innerText = guess
                    //     // for (i=0; i<spans.length; i++) {
                    //     //     console.log("spans", spans[i].id)
                    //     //     if 
                    //     // }
                    // }
                loopThroughSpans(guess, guessedLetterArrFixedIndices)
            }
            else {
                console.log("LETTER WRONG")
            }
    
        }
    }
    renderLetterToDom()

    function loopThroughSpans(letter, guessedLetterArrFixedIndices) {
        let grabSpans = document.getElementsByTagName('span')
        let spanIdStringToInt = parseInt(grabSpans[i].id)

        console.log("typeof letter", typeof letter) // string
        console.log("LETTER INSIDE loopThroughSpans()", letter) // y
        for (i=0; i<grabSpans.length; i++) {
            if (guessedLetterArrFixedIndices[i - 1] != undefined) {
                console.log("guessedLetterArrFixedIndices", guessedLetterArrFixedIndices[i - 1])
                
                console.log("grabSpans[i] inside grabSpanId()", spanIdStringToInt)
                if (spanIdStringToInt.id != undefined) {
                    console.log("grabSpans[i].id inside grabSpanId()", spanIdStringToInt.id)
                    console.log("typeof grabSpans[i].id", typeof spanIdStringToInt.id)
    
                }

                matcher(guessedLetterArrFixedIndices[i - 1], spanIdStringToInt)
            }
        }
    }
    

    function matcher(guessedLetterArrFixedIndices, spanId) {
        // console.log("guessedLetterArrFixedIndices inside getSpanId", guessedLetterArrFixedIndices) // 1
        console.log("typeof guessedLetterArrFixedIndices", typeof guessedLetterArrFixedIndices) // number

        console.log("spanId inside matcher", spanId)
        console.log("guessedLetterArrFixedIndices inside matcher", guessedLetterArrFixedIndices) // 1
    }

    // for (i=0; i<guessedLetterArrFixedIndices.length; i++) {
    //     console.log("spans indices id", guessedLetterArrFixedIndices[i])
    //     // for(i=0; i<grabSpans.length; i++) {
    //     //     if (guessedLetterArrFixedIndices[i] = grabSpans[i].id) {
    //     //         // console.log("MATCHED!", guessedLetterArrFixedIndices)
    //     //         // console.log("MATCHED!", grabSpans[i].id)
    //     //         // grabSpans[i].innerText = guessedLetterArrFixedIndices[i] 
    //     //     }
    //     // }
    // //     // console.log("grabSpans[i]", grabSpans[i])
    // //     // if (guess === grabSpans[i]) {
    // //     //     console.log("INDICES MATCHED!", i)
    // //     //     // grabSpans[i].innerText = guess
    // //     // }
    // //     for (i=0; i<spans.length; i++) {

    // //         console.log("inside for loop for spans", i)
    // //     }
    // }

    // console.log(typeof guessedLetterArrFixedIndices[0])
    // console.log("guessedLetterArrFixedIndices.length", guessedLetterArrFixedIndices.length)

    // for(i=0; i<guessedLetterArrFixedIndices.length; i++) {
    //     for(i=0; i<splitted_answer.length; i++) {
    //         console.log("splitted_answer[i]", splitted_answer[i])
    //     }
    //     console.log("inside inner loop for guessedLetterArrFixedIndices")

    // }

    // for (i=0; i<spans.length; i++) {
    //     console.log("spans indices", i)
    //     // console.log("spans[i]", spans[i])
    //     if (guess === spans[i]) {
    //         console.log("INDICES MATCHED!", i)
    //         // spans[i].innerText = guess
    //     }
    // }

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


