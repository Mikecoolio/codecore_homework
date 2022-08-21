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
const make_clickable = document.getElementsByClassName('button')
for (i=0;i<make_clickable.length;i++) {
    // console.log("make_clickable[i]", make_clickable[i].innerHTML)
    make_clickable[i].onclick = function(elem){
        test = this.innerHTML.toLowerCase()
        console.log(`Clicked ${test}`)
        checkAnswer(test)
    }
}

function get_elem_by_id() {
    spans = document.getElementsByTagName('span')

    for (i=0;i<spans.length;i++) {
        let element = document.getElementById(`${i}`)//[i]
        console.log("element", element.innerHTML)
    }
}
get_elem_by_id()

// Answer check
function checkAnswer(guess) {
    console.log(`The guess is ${guess}`)
    splitted_answer = answer.split('')
    for(i=0; i<splitted_answer.length; i++) {
        console.log(splitted_answer[i]) 
        console.log("i", i)
    }

        if(guess === splitted_answer[i]) {
            // answer_arr[i] = ''
            console.log(`GUESSED RIGHT LETTER: ${splitted_answer[i]}`)
            //  FIND FIRST SPAN ELEM WITH JUST A LINE AND PUT THE GUESS IN ITS PLACE
            // let target_single_span_index = document.getElementsByTagName("span")
            // let spanList = Object.values(target_single_span_index)

            // spanList.find(elem => elem.innertext === i)

            // spanList.find(element => {
            //     element = "_"
            //     console.log(`Element found: ${element}`)
            //     element.innerHTML = guess
            //     // element.innerHTML = "_"
            //     // element.innerHTML.toLowerCase() === splitted_answer[i]
            // })

            // let target_single_span_index = document.getElementsByClassName('0')
            // single_span = target_single_span_index[0]
        }
    }

    // answer.split('').forEach(function(letter) {
    //     if (letter === guess) {
    //         console.log(`The Guessed letter: ${letter} was correct`)
    //         spans = document.getElementsByTagName('span')
    //         for(i=0; i<spans.length; i++) {
                
    //             span = spans[i]
    //             span.innerHTML = letter
    //             if (span === null) {
    //                 console.log("NULL DETECTED AT", span)
    //             }
    //         }
    //         // answer_arr.push(letter)
    //         // return answer_arr
    //     }
    //     else {
    //         console.log(`The guess: ${guess} is incorrect`)
    //         livesChecker(1)
    //     }
       
    // })
    // console.log("answer_arr", answer_arr)


// Lives check
function livesChecker(minus_a_life) {
    let default_lives = 10

    if (minus_a_life === 1) {
        default_lives -= 1
    }
    console.log(`The player has ${default_lives} remaining`)
}


