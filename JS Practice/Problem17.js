console.log("This is the function to find prime number.")
function isPrime(num){
    let isPrimeNumber = true;
    for (let i = 2; i <= Math.sqrt(num); i++){
        if(num % i === 0){
            isPrimeNumber = false;
            break;
        }
    }
    return isPrimeNumber;
}

console.log(isPrime(11))