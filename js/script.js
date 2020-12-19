//My playlist😎
let playlist = [
    {src:'./audio/1.mp3', name:'Trance - 009 Sound System Dreamscape'},
    {src:'./audio/2.mp3', name:'Tay Zonday - Chocolate Rain'},
    {src:'./audio/3.mp3', name:'Motivational Uplifting Cinematic Background Music | Royalty Free'},
    {src:'./audio/4.mp3', name:'Adventures – A Himitsu (No Copyright Music)'}
]

//start variables
let isPlaying = false
let currentAudio = 0
let audio = null;

//PlaylistLister
let playlistRefresh = function(){
for (i = 0; i < playlist.length; i++){
    song = playlist[i]
    document.querySelector(`.playlist`).innerHTML += `<li>${song.name}</li>`
    console.log(song.name)
}
}

playlistRefresh()

//Load Audio
let loadAudio = function(currentAudio){
    let song = playlist[currentAudio]
    if (audio){
        audio.src = song.src
        document.querySelector(`#audioname`).textContent = (song.name)
            if (isPlaying){
                audio.play()
            }
        } else {
                audio = new Audio(song.src)
                document.querySelector(`#audioname`).textContent = (song.name)
        }

}
loadAudio(0)

//Play and Stop Audio
let play = document.querySelector(`#play`) 

let pressPlay = function() {
    if (isPlaying){
        audio.pause()
        isPlaying = false
        play.src=`./img_control/play.png` 
    } else {
        audio.play()
        isPlaying = true
        play.src = `./img_control/pause.png`
    }
}

play.addEventListener(`click`,pressPlay)

//Forward and Rewind Function
let nextAudio = function() {
    if (currentAudio < playlist.length - 1){
    currentAudio = currentAudio + 1
    loadAudio(currentAudio)
    }
}
let previousAudio = function() {
    if (currentAudio > 0){
    currentAudio = currentAudio - 1
    loadAudio(currentAudio)
    }
}

let forward = document.querySelector(`#forward`)
forward.addEventListener(`click`, nextAudio)
let rewind = document.querySelector(`#rewind`)
rewind.addEventListener(`click`, previousAudio)


// let progress = document.querySelector(`#progress`)
// let calculatePrecentPlayed = function(){
//     let percentage = (audio.currentTime / audio.duration).toFixed(2) * 100;
//      = `${percentage}`
// }