console.log("This is the problem to find fibonacci number")

function fibonacci(n){
    if (n == 0){
        return 0
    }
    else if (n == 1){
        return 1
    }
    else {
        return (fibonacci(n - 1) + fibonacci(n - 2))
    }
}

console.log(fibonacci(6))