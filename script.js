let songIndex
let audioElement = new Audio('songs/1.mp3')
let masterPlay = document.getElementById('masterPlay')
let myProgressBar = document.getElementById('myProgressBar')
let gif = document.getElementById('gif')
let masterSongName = document.getElementById('masterSongName')
let songItems = Array.from(document.querySelectorAll('.songItem'))

let songs = [
    {songName: "Tere Mere Darmiyaan", filePath:"songs/1.mp3", CoverPath:"images/Cover/10.jpg", audio:new Audio('songs/1.mp3')},
    {songName: "Hum hai na", filePath:"songs/2.mp3", CoverPath:"images/Cover/2.jpg", audio:new Audio('songs/2.mp3')},
    {songName: "Thodi Der", filePath:"songs/3.mp3", CoverPath:"images/Cover/3.jpg", audio:new Audio('songs/3.mp3')},
    {songName: "Duniya", filePath:"songs/4.mp3", CoverPath:"images/Cover/1.jpg", audio:new Audio('songs/4.mp3')},
    {songName: "Rozana", filePath:"songs/5.mp3", CoverPath:"images/Cover/4.jpg", audio:new Audio('songs/5.mp3')},
    {songName: "Tujhe kaise pta na chala", filePath:"songs/6.mp3", CoverPath:"images/Cover/5.jpg", audio:new Audio('songs/6.mp3')},
    {songName: "Kaise hua", filePath:"songs/7.mp3", CoverPath:"images/Cover/6.jpg", audio:new Audio('songs/7.mp3')},
    {songName: "Let me love you", filePath:"songs/8.mp3", CoverPath:"images/Cover/7.jpg", audio:new Audio('songs/8.mp3')},
    {songName: "Kabhi Tumhe", filePath:"songs/9.mp3", CoverPath:"images/Cover/8.jpg", audio:new Audio('songs/9.mp3')},
    {songName: "Aankho se batana", filePath:"songs/10.mp3", CoverPath:"images/Cover/9.jpg", audio:new Audio('songs/10.mp3')}
]


masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle')
        masterPlay.classList.add('fa-pause-circle')
        gif.style.opacity = 1
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle')
        masterPlay.classList.add('fa-play-circle')
        gif.style.opacity = 0
    }
})

audioElement.addEventListener('timeupdate', ()=>{
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100)
    myProgressBar.value = progress
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100
})

songItemPlay = Array.from(document.getElementsByClassName("songItemPlay"))
const makeAllPlays = ()=>{
    songItemPlay.forEach((element)=>{
        // masterSongName.innerText = songs[songIndex-1].songName
        element.classList.remove('fa-pause-circle')
        element.classList.add('fa-play-circle')
    })
}

songItemPlay.forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlays()
        songIndex = e.target.id
        masterSongName.innerText = songs[songIndex-1].songName
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = 'songs/'+songIndex+'.mp3'
        audioElement.play()
        gif.style.opacity = 1
        e = songIndex
        masterPlay.classList.remove('fa-play-circle')
        masterPlay.classList.add('fa-pause-circle')
    })
})

let previous = document.getElementById('previous')
previous.addEventListener('click', ()=>{
    console.log("yo")
     if(songIndex>1){
        songIndex-=1
    }
    console.log(songIndex)
    audioElement.src = 'songs/'+songIndex+'.mp3'
    masterSongName.innerText = songs[songIndex-1].songName
    audioElement.play()
    masterPlay.classList.remove('fa-play-circle')
    masterPlay.classList.add('fa-pause-circle')
})

let forward = document.getElementById('forward')
forward.addEventListener('click', ()=>{
    console.log("yo")
    if(songIndex>10){
        songIndex = 1
    } else{
        songIndex += 1
    }
    audioElement.src = 'songs/'+songIndex+'.mp3'
    masterSongName.innerText = songs[songIndex-1].songName
    audioElement.play()
    masterPlay.classList.remove('fa-play-circle')
    masterPlay.classList.add('fa-pause-circle')
   
})