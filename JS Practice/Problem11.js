console.log("This is the problem to find the missing element in an array")

// let n = 5;
function findMissingNumber(arr){
    const readline = require("readline-sync")
    let n = Number(readline.question())
    let sum = arr.reduce((computation, currentValue) => computation + currentValue, 0)
    return ((n * (n + 1))/2)- sum
}

console.log(findMissingNumber([1,2,4,5]))