function countCharacterOccurences(str) {
    const counts = {};

    for (let char of str) {
       
        if (counts[char]) {
            counts[char]++;
        }else {
            counts[char] = 1;
        }
    }
    return counts;
}

const inputString = 'google';
const characterCounts = countCharacterOccurences(inputString);
console.log(characterCounts);