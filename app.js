let alphabet = 'abcdefghijklmnopqrstuvwxyz';
alphabet = alphabet.toUpperCase()
alphabet = alphabet.split('')
console.log(alphabet.length)

a = document.querySelectorAll('#root')

for (i=0;i<alphabet.length;i++) {
    document.body.appendChild(document.createElement('div'))
    letter = document.body.appendChild(document.createTextNode(alphabet[i]))
}


