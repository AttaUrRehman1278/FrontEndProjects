console.log("This is the problem to find the median of sorted array")
let arr1 = [1, 3];
let arr2 = [2];
let arr3 = arr1.concat(arr2);
const array = arr3.reduce((a, b) => a + b, 0)
let n = arr3.length;
console.log(array/n)