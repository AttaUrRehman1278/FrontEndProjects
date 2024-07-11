console.log("This is javascript file")


async function getSurahs() {
    let a = await fetch("http://127.0.0.1:3000/tilawat/")
    let response = await a.text()
    console.log(response)
}