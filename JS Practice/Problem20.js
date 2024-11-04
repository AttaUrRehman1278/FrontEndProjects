console.log("This is the problem to find the power of an integer");
let arr1 = [10,20,30,40,50];
let arr2 = [40,30,50,60]
const numbers = arr1.concat(arr2);
const uniqueNumbers = numbers.filter((num, index, array) => array.indexOf(num) !== index);

console.log(uniqueNumbers); // Output: [1, 2, 3, 4, 5]
