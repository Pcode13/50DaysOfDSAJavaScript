//Find The Sum Of All Elements In An Array Using Recursion
//Approach 0 to n
function numAdd(current,num){
    if(current===num){
        return num
    }
    return current+numAdd(current+1,num)
}

console.log(numAdd(0,9))

//n to 0 
function numAdd(num){
    if(num===0){
        return 0
    }
    
    return num+numAdd(num-1)
}

console.log(numAdd(9))