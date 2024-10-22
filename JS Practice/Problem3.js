
const str = "code with harry";

const capitalize = (input) =>
    input.split(" ").map((word) => word[0].toUpperCase() + word.slice(1)).join(" ")
    // .split(" ") // split by spaces
    // .map((word) => word[0].toUpperCase() + word.slice(1)) // uppercase first character of every word
    // .join(" "); // join them back by spaces

console.log(capitalize(str)); // Code Drops
