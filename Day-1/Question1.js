// Problem Explanation
// You are given a sorted array of integers, which means the values are in non-decreasing order. 
// You need to square each element and return a new array where the squared values are sorted in ascending order.
Input:  [-4, -2, 0, 1, 3, 5]
Output: [0, 1, 4, 9, 16, 25]

function sortedSquaredArray(arr) {
    return arr.map(num => num * num).sort((a, b) => a - b);
}

console.log(sortedSquaredArray([-4, -2, 0, 1, 3, 5])); 
// Output: [0, 1, 4, 9, 16, 25]
