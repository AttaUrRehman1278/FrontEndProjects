console.log("This is the problem to reverse words of a sentence")

function reverseWords(str){
    return str.split(" ").reverse().join(" ")
}

console.log(reverseWords("This is a string"))