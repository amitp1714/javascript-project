const song = document.querySelector("audio");
const play = document.getElementById("play");
const img = document.querySelector("img");
const songtitle = document.getElementById("title");
const songartist = document.getElementById("artist");
const next = document.getElementById("next");
const prev = document.getElementById("prev");

 let isPlaying = false;
 const playMusic = () =>{
    isPlaying = true;
    song.play();
    play.classList.replace("fa-play", "fa-pause")
    img.classList.add("anime");
 }
const pauseMusic = ()=>{
    isPlaying = false;
    song.pause();
    play.classList.replace("fa-pause", "fa-play")
    img.classList.remove("anime");
}
play.addEventListener("click", () =>{
    isPlaying ? pauseMusic() : playMusic()
})

const songDetails = [
    {
        name : "Aylex - Cinematic",
        title : "Cinematic",
        artist: "Alex"
    },
    {
        name : "Aylex - Fighter",
        title : "Fighter",
        artist: "Alex"
    },
    {
        name : "N3X - For You",
        title : "For_You",
        artist: "N3X"
    },
    {
        name : "Pufino - Magnificent",
        title : "Magnificent",
        artist: "Pufino"
    }
];
const loadSongDetails = (songDetails) =>{
    songtitle.textContent = songDetails.title;
    songartist.textContent = songDetails.artist;
    song.src = "assets/" + songDetails.name + ".mp3";
};

songIndex = 0;
const nextSong = ()=>{
    songIndex = (songIndex + 1) % songDetails.length;  
    loadSongDetails(songDetails[songIndex]);
    playMusic();
}
const prevSong = ()=>{
    songIndex = (songIndex - 1 + songDetails.length) % songDetails.length;  
    loadSongDetails(songDetails[songIndex]);
    playMusic();
}
next.addEventListener("click", nextSong);
prev.addEventListener("click", prevSong);




    
