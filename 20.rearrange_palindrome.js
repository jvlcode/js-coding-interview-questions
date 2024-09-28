// hello
function canRearrangePalindrome(s) {
    // Create a frequency map for all characters
    const frequencyMap = {
        // h : 1,
        // e : 1,
        // l :  2,
        // o : 1
    };

    // Count occurences of each character
    for (const char of s) {

        if (char in frequencyMap) {
          
            frequencyMap[char]++;
        }else {
            frequencyMap[char] = 1;
        }

    }


    // Count how many have a odd frequency
    let oddCount = 0;
    for (const count of Object.values(frequencyMap)) {
        if (count % 2 !== 0) {
            oddCount++; //3
        }
    }

   return oddCount <= 1; //false

}

console.log(canRearrangePalindrome("hello"));

