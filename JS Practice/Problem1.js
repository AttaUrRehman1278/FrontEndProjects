console.log("This is problem to chose random color in array")

const theme = ["red", "blue", "green"]
const randomNumber = Math.round(Math.random() * 100)
const randomElement = randomNumber % theme.length;

console.log(theme[randomElement])
