console.log("THis is the problem to count number of vowels in the string")

function countVowels(str) {
    let vowel = ['a', 'e', 'i', 'o', 'u'];
    return str.split('').filter((char)=>vowel.includes(char)).length
}

console.log(countVowels("We are vowels"))