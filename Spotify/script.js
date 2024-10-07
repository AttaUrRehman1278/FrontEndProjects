let currentSurah = new Audio();
let surahs;
let currFolder;

function secondsToMinSec(seconds) {
    if (isNaN(seconds) || seconds < 0){
        return "00:00"
    }
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

async function getSurahs(folder) {
    currFolder = folder;
    const response = await fetch(`http://127.0.0.1:3000/${folder}/`);
    const text = await response.text();
    let div = document.createElement("div")
    div.innerHTML = text
    let as = div.getElementsByTagName("a")
    let songs = []
    for (let index = 0; index < as.length; index++) {
        const element = as[index];
        if (element.href.includes(".mp3")){
            // console.log(element)
            songs.push(element.href.split(`/${currFolder}/`)[0].split("/")[5])
        }
    }
    return songs

}

const playAudio = (track, pause = false) => {
    
    currentSurah.src = `/${currFolder}/`+ track;
    if (!pause) {
        currentSurah.play();
    }
    play.src = "public/pause.svg";
    document.querySelector(".surahinfo").textContent = decodeURI(track.split(".")[0]);
    document.querySelector(".surahtime").textContent = "00:00/00:00";
}

async function displayAlbums() {
    const response = await fetch(`http://127.0.0.1:3000/tilawat/`);
    const text = await response.text();
    let div = document.createElement("div")
    div.innerHTML = text
    let anchors = div.getElementsByTagName("a")
    let array = Array.from(anchors)
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        console.log(array.href)
    }
}

async function main() {
    surahs = await getSurahs(`tilawat/Ismail Annuri`);
    playAudio(surahs[0], true);

    displayAlbums();

    const surahUL = document.querySelector(".playlist ul");
    const surahCard = document.querySelector(".album-cards");

    const createSurahList = (surah) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <img src="public/rockstar-umair.jfif" alt="">
            <div class='info'>
                <div class='song-name'>${surah.replaceAll("%20", " ")}</div>
            </div>
            <div class='play-song'>
                <img src="public/play.svg" alt="">
            </div>
        `;
        li.addEventListener("click", () => playAudio(surah));
        return li;
    };

    const fragment1 = document.createDocumentFragment();

    surahs.forEach(surah => {
        fragment1.appendChild(createSurahList(surah));
    });

    surahUL.appendChild(fragment1);

    play.addEventListener("click", () => {
        if (currentSurah.paused) {
            currentSurah.play();
            play.src = "public/pause.svg";
        } else {
            currentSurah.pause();
            play.src = "public/play.svg";
        }
    });

    const surahTime = document.querySelector(".surahtime");
    const circle = document.querySelector(".circle");

    currentSurah.addEventListener("timeupdate", () => {
        surahTime.textContent = `${secondsToMinSec(currentSurah.currentTime)}/${secondsToMinSec(currentSurah.duration)}`;
        circle.style.left = `${(currentSurah.currentTime / currentSurah.duration) * 100}%`;
    });

    document.querySelector(".seekbar").addEventListener("click", (e) => {
        const percent = e.offsetX / e.currentTarget.offsetWidth;
        circle.style.left = `${percent * 100}%`;
        currentSurah.currentTime = percent * currentSurah.duration;
    });

    // Add Event Listener for hamburger
    document.querySelector(".hamburger").addEventListener("click", (e => {
        document.querySelector(".sidebar").style.left = "0%";
    }))

    // Add Event Listener for hamburger
    document.querySelector(".close").addEventListener("click", (e => {
        document.querySelector(".sidebar").style.left = "-120%";
    }))


    // Add Event Listener for previous and next surah
    previous.addEventListener("click", () => {
        currentSurah.pause()

        let index = surahs.indexOf(currentSurah.src.split("/").slice(-1)[0])
        if((index -1 ) >= 0){
            playAudio(surahs[index - 1])
        }
    })

    next.addEventListener("click", () => {
        currentSurah.pause()

        let index = surahs.indexOf(currentSurah.src.split("/").slice(-1)[0])
        if((index + 1) < surahs.length){
            playAudio(surahs[index + 1])
        }
    })

    // Add Event Listener for Volume
    document.querySelector(".range").getElementsByTagName("input")[0].addEventListener("change", (e => {
        currentSurah.volume = parseInt(e.target.value)/100
    }))

    Array.from(document.getElementsByClassName("card")).forEach(e => {
        e.addEventListener("click", async item => {
            surahs = await getSurahs(`tilawat/${item.currentTarget.dataset.folder}`)
        })
    })
}

main();
