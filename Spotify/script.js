console.log("This is javascript file");

let currentSurah = new Audio()

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

const playAudio = (track) => {
    currentSurah.src = "/tilawat/" + track
    currentSurah.play()
    play.src = "public/pause.svg"
}
async function main() {

    let surahs = await getSurahs();
    let surahUL = document.querySelector(".playlist").getElementsByTagName("ul")[0];
    for (const surah of surahs) {
        surahUL.innerHTML = surahUL.innerHTML + `<li> <img src="public/rockstar-umair.jfif" alt="">
            <div class='info'>
                <div class= 'song-name'>${surah.replaceAll("%20", " ")} </div>
            </div>
            <div class = 'play-song'>
                <img src="public/play.svg" alt="">
            </div>
        </li>`
    }
    
    Array.from(document.querySelector(".playlist").getElementsByTagName("li")).forEach(e => {
        e.addEventListener("click", element => {
            playAudio(e.querySelector(".song-name").innerHTML)
        })
    })

    let surahCard = document.querySelector(".album-cards");
    for (const surah of surahs){
        surahCard.innerHTML = surahCard.innerHTML + `<div class="card">
            <img src="public/rockstar-umair.jfif" alt="">
                            <h3>${surah.replaceAll("%20", " ")}</h3>
                            
        </div>`
    }
    play.addEventListener("click", ()=> {
        if (currentSurah.paused) {
            currentSurah.play()
            play.src = "public/pause.svg"
        }
        else {
            currentSurah.pause()
            play.src = "public/play.svg"
        }
    })
}

main()