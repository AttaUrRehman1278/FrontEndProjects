console.log("This is the problem to remove duplicates from the array")

function removeDuplicates(arr) {
    let uniqueArrray = [...new Set(arr)]
    return uniqueArrray
}
arrr = [1, 2, 2, 3, 4, 4, 5]
console.log(removeDuplicates(arrr))