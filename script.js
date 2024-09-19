var arr = [
    { songName: "Arjan Valley", url: "song/Arjan Vailly Ne.mp3", img: "img/animal.jpg", duration: "3:02" },
    { songName: "Jale 2", url: "song/Jale 2.mp3", img: "img/jale.jpg", duration: "2:39" },
    { songName: "Ram Siya Ram", url: "song/Ram Siya Ram.mp3", img: "img/ram.jpg", duration: "3:50" },
    { songName: "Pehle Bhi Main", url: "song/Pehle Bhi Main.mp3", img: "img/animal.jpg", duration: "4:10" },
]

var songDiv = document.querySelector("#all-songs")
var audio = new Audio()
var selectedSong = 0;
var poster = document.querySelector("#left")
var play = document.getElementById('play')
var forward = document.getElementById('forward')
var backward = document.getElementById('backward')

function mainfnc() {
    var clutter = ""
    arr.forEach(function (item, index) {
        clutter += `<div class="song-card" id="${index}">
        <div class="part1">
            <img src="${item.img}" alt="">
            <h2>${item.songName}</h2>
        </div>
        <h6>${item.duration}</h6>
      </div>`
    })
    songDiv.innerHTML = clutter;
    audio.src = arr[selectedSong].url
    poster.style.backgroundImage = `url(${arr[selectedSong].img})`
}
mainfnc()

songDiv.addEventListener('click', function (e) {
    selectedSong = e.target.id
    mainfnc()
    play.innerHTML = `<i class="ri-pause-mini-fill"></i>`
    flag = 1;
    audio.play()
})

var flag = 0;

play.addEventListener('click', function(){
    if(flag == 0){
        play.innerHTML = `<i class="ri-pause-mini-fill"></i>`
        audio.play()
        flag = 1
    }else{
        play.innerHTML = `<i class="ri-play-mini-fill"></i>`
        audio.pause()
        flag = 0
    }
})

forward.addEventListener('click', function(){
    if(selectedSong < arr.length-1){
        selectedSong++
        mainfnc()
        audio.play()
    }
    else{
        forward.style.opacity = 0.3
    }
})
backward.addEventListener('click', function(){
    if(selectedSong > 0){
        selectedSong--
        mainfnc()
        audio.play()
    }
    else{
        backward.style.opacity = 0.3
    }
})