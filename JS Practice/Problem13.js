console.log("This is the problem to find if the strings are anagrams or not")

function areAnagrams(str1, str2) {
    let a = str1.split('').sort().join("");
    let b =  str2.split('').sort().join("");
    if (a == b){
        return true
    }
    else {
        return false
    }
}


console.log(areAnagrams("listen", "silent"))

