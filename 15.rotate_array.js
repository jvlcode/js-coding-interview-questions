function rotateArray(arr, k) {
    
    k = k % arr.length;  // 3 % 5 = 3

    // reverse  the entire array
    // start = 0 end = 4
    // [1,2,3,4,5] = [5,4,3,2,1]
    reverse(arr, 0, arr.length - 1);

    // reverse the first elements
    // k -1 = 3-1 =2
    // start = 0, end = 2
    // [5,4,3,2,1] = [3,4,5,2,1]
    reverse(arr, 0, k-1)

    // reverse the remaining elements
    // start = 3 end=4
    // [3,4,5,2,1] = [3,4,5,1,2]
    reverse(arr, k, arr.length - 1)

    return arr;
}

function reverse(arr, start, end) {
   while (start < end) {
        // Swap elements at start and end
        [arr[start], arr[end]] =  [arr[end], arr[start]];
        start++;
        end--;
   }
}

console.log(rotateArray([1,2,3,4,5], 3));