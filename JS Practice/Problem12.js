console.log("This is the problem to convert first letter of every word in a sentence to uppercase")

function titleCase(sentence) {
    return sentence.split(" ").map((word)=>word[0].toUpperCase()+word.slice(1)).join(" ");
}

console.log(titleCase("this is the string"))