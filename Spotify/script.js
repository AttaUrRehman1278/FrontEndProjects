console.log("This is javascript file");


async function getSurahs() {
    let a = await fetch("http://127.0.0.1:3000/tilawat/");
    let response = await a.text();
    let div = document.createElement("div");
    div.innerHTML = response;
    let as = div.getElementsByTagName("a");
    let surahs = []
    for (let index = 0; index < as.length; index++) {
        const element = as[index];
        if (element.href.endsWith(".mp3")) {
            surahs.push(element.href)
        }
    }
    return surahs
}

async function main() {

    let surahs = await getSurahs();
    console.log(surahs);
    var audio = new Audio(surahs[0]);
    audio.play(); 
}
