console.log("This is the problem to find longest word")

function longestWord(sentence) {
    // write your code below
    let longest = ""
    let words = sentence.split(" ")
    for(const word of words ){
        if(word.length > longest.length){
            longest = word
        }
    }
    return longest
}

console.log(longestWord("This is the problem to find longest word"))