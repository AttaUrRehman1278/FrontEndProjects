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
            surahs.push(element.href.split("/tilawat/")[1])
        }
    }
    return surahs
}

async function main() {

    let surahs = await getSurahs();
    let surahUL = document.querySelector(".playlist").getElementsByTagName("ul")[0];
    for (const surah of surahs) {
        surahUL.innerHTML = surahUL.innerHTML + `<li> <img src="public/rockstar-umair.jfif" alt="">
            <div class='info'>
                <div>${surah.replaceAll("%20", " ")} </div>
            </div>
            <div class = 'play-song'>
                <img src="public/play.svg" alt="">
            </div>
        </li>`
    }
    // var audio = new Audio(surahs[0]);
    // audio.play(); 
}

main()