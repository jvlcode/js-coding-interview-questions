function intToRoman(num) {
    //Define roman numeral symbols for specific values
    const romanMap = [
        { value: 1000, symbol: 'M' },
        { value: 900, symbol: 'CM'},
        { value: 500, symbol: 'D' },
        { value: 400, symbol: 'CD' },
        { value: 100, symbol: 'C' },
        { value: 90, symbol: 'XC' },
        { value: 50, symbol: 'L' },
        { value: 40, symbol: 'XL' },
        { value: 10, symbol: 'X' },
        { value: 9, symbol: 'IX' },
        { value: 5, symbol: 'V' },
        { value: 4, symbol: 'IV' },
        { value: 1, symbol: 'I' }
    ];

    let roman = '';

    for (let i = 0; i < romanMap.length; i++) {
        const {value, symbol} = romanMap[i];

        //While the current value can fit into num, appends its roman symbol
        while (num >= value) {
            roman += symbol;
            num -= value;
        }
        
    }

    return roman;
}

// console.log(intToRoman(58)); //LVIII
// console.log(intToRoman(1994));//MCMXCIV
console.log(intToRoman(9))//IX