console.log("This is the problem to find factorial of a number")

function factorial(n) {
    if (n == 0 || n == 1){
        return 1
    }
    else {
        return n * factorial(n - 1)
    }
}

console.log(factorial(5))