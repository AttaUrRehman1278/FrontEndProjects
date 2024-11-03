let character = "#";
let count = 8;
let arr = []

for(let i = 1; i <= count; i++){
    arr = makePyramid(i , count)
    console.log(arr)
}

function makePyramid(rowNumber, rowCount){
    return (" ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber));    
}

