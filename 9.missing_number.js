// Example1: Sum formula method

// function findMissingNumber(arr) {
//     const n = arr.length + 1;

//     //sum of numbers from 1 to n
//     const totalSum = (n * (n+1)) / 2; 
//     //15

//     //Sum of numbers in array
//     const arraySum = arr.reduce((acc, num) => acc + num, 0) 
//     //12

//     //15 - 12 = 3
//     return totalSum - arraySum; //Missing number

// }

// console.log(findMissingNumber([1,2,4,5]))

// Example2: using Set
function findMissingNumber(arr) {
  const n = arr.length + 1;//5
  const numberSet = new Set(arr); 

  for (let i = 1; i <= n; i++) {
    if (!numberSet.has(i)) {
        return i;
    }
  }
}

console.log(findMissingNumber([1,3,4,5]))
