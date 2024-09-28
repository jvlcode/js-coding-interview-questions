//Example1: Using Set
// function removeDuplicates(arr) {
//    return [...new Set(arr)];
// }

// const array = [1, 2, 3, 3, 4, 5, 5,6,6,8,8,8];
// console.log(removeDuplicates(array));

//Example2: filter and indexOf
// function removeDuplicates(arr) {
//     return arr.filter((val, index, self) => self.indexOf(val) == index) 
// }

// const array = [1, 2, 3, 3, 4, 5, 5,6,6,8,8,8];
// console.log(removeDuplicates(array));

// Example3: reduce 
function removeDuplicates(arr) {
   return arr.reduce((unique, item) => {
        return unique.includes(item) ? unique: [...unique, item];
   }, [])
}
const array = [5,7,8,8,9,9];
console.log(removeDuplicates(array));
