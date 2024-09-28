function isPalidrome(str) {
    function reverseString(s) {
        let reversed = '';

        for(let i=str.length - 1; i >= 0; i--) {
            reversed += str[i];
        }
        return reversed;
    }

    const cleanedStr = str.toLowerCase();
    return cleanedStr === reverseString(cleanedStr);
}

console.log(isPalidrome('level'));