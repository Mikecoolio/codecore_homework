let alphabet = 'abcdefghijklmnopqrstuvwxyz';
alphabet = alphabet.toUpperCase()
alphabet = alphabet.split('')
console.log(alphabet.length)

// a = document.querySelectorAll('#root')

for (i=0;i<alphabet.length;i++) {
    document.body.appendChild(document.createElement('button')).innerText = alphabet[i].toUpperCase()
}

const letter_divs = document.getElementsByTagName('section')

for (i=0;i<letter_divs.length;i++) {
    letter_divs[i].className = "letter"
    console.log(letter_divs[i])
}

