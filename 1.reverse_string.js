const originalString = 'logesh'; // len = 5 
                                // index = 5 -1

const reversedString = reverseString(originalString);
console.log(reversedString);
function reverseString(str) {
    let reversed = '';

    for(let i=str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}