console.log("This is the problem to find sum using reduce method")

const arr = [1, 3, 5, 4, 5, 8]

const sum = arr.reduce((previousSum, element) => {
    const newSum = previousSum + element;
    return newSum;
}, 0)

console.log(sum)