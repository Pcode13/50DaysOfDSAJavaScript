// Problem Explanation
// You are given a sorted array of integers, which means the values are in non-decreasing order. 
// You need to square each element and return a new array where the squared values are sorted in ascending order.
Input:  [-4, -2, 0, 1, 3, 5]
Output: [0, 1, 4, 9, 16, 25]

//Solution 1
function sortedSquaredArray(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(arr[i] * arr[i]);
    }
    return result.sort((a, b) => a - b);
}
//solution 2
function sortedSquaredArray(arr) {
    return arr.map(num => num * num).sort((a, b) => a - b);
}
console.log(sortedSquaredArray([-4, -2, 0, 1, 3, 5])); 

//Solution 3
function sortedSquarredArray(array){
    //write code here.make sure to return desired array 
  let newArray=new Array(array.length).fill(0)
    
    for(let i=0;i<array.length;i++){
        newArray[i]=array[i]*array[i]
    }
    let SortedArr=newArray.sort((a,b)=>a-b)
    return newArray
}

const arrayData=sortedSquarredArray([-4,-2,1,5,3])
console.log(arrayData)
//Solution 4
function sortedSquarredArray(array){
    const newArray = new Array(array.length).fill(0);
    let pointerLeft =0;
    let pointerRight = array.length-1;
    for(let i=array.length-1;i>=0;i--){
        const leftSquared = Math.pow(array[pointerLeft],2);
        const rightSquared = Math.pow(array[pointerRight],2);
        if(leftSquared>rightSquared){
            newArray[i]=leftSquared;
            pointerLeft++;
        } else{
            newArray[i]=rightSquared;
            pointerRight--;
        }
    }
    return newArray;
}