console.log("This is javascript file");

let currentSurah = new Audio();

function secondsToMinSec(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

async function getSurahs() {
    const response = await fetch("http://127.0.0.1:3000/tilawat/");
    const text = await response.text();
    const parser = new DOMParser();
    const doc = parser.parseFromString(text, 'text/html');
    const links = doc.querySelectorAll('a[href$=".mp3"]');
    return Array.from(links).map(link => link.href.split("/tilawat/")[1]);
}

const playAudio = (track, pause = false) => {
    currentSurah.src = "/tilawat/" + track;
    if (!pause) {
        currentSurah.play();
    }
    play.src = "public/pause.svg";
    document.querySelector(".surahinfo").textContent = decodeURI(track.split(".")[0]);
}

async function main() {
    const surahs = await getSurahs();
    playAudio(surahs[0], true);

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

    const createSurahCard = (surah) => {
        const div = document.createElement('div');
        div.className = 'card';
        div.innerHTML = `
            <img src="public/rockstar-umair.jfif" alt="">
            <h3 class="surah-name">${surah.replaceAll("%20", " ")}</h3>
        `;
        div.addEventListener("click", () => playAudio(surah));
        return div;
    };

    const fragment1 = document.createDocumentFragment();
    const fragment2 = document.createDocumentFragment();

    surahs.forEach(surah => {
        fragment1.appendChild(createSurahList(surah));
        fragment2.appendChild(createSurahCard(surah));
    });

    surahUL.appendChild(fragment1);
    surahCard.appendChild(fragment2);

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
}

main();
