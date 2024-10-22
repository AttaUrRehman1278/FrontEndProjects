console.log("This is the problem to find if the string is palindrome or not")

function isPalindrome(str) {
    // write your code below
    let newStr = str.split('').reverse().join('')
    if(newStr == str){
        return true
    }
    else{
        return false
    }
}

console.log(isPalindrome("madam"))