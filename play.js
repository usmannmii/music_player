let progress = document.getElementById("progress");
let song = document.getElementById("song");
let ctrlIcon = document.getElementById("ctrlIcon");

song.onloadedmetadata = function(){
  progress.max = song.duration;
  progress.value = song.currentTime;
}

function playPause(){
  if(ctrlIcon.classList.contains("fa-pause")){
    song.pause();
    ctrlIcon.classList.remove("fa-pause");
    ctrlIcon.classList.add("fa-play");
  }
  else{
    song.play();
    ctrlIcon.classList.add("fa-pause");
    ctrlIcon.classList.remove("fa-play");
  }
}

function playPreviousSong() {
  var song = document.getElementById("song");
  var currentSource = song.currentSrc;
  var index = songs.indexOf(currentSource);
  if (index > 0) {
    song.src = songs[index - 1];
    song.play();
  }
}

function playNextSong() {
  var song = document.getElementById("song");
  var currentSource = song.currentSrc;
  var index = songs.indexOf(currentSource);
  if (index < songs.length - 1) {
    song.src = songs[index + 1];
    song.play();
  }
}

if(song.play()){
  setInterval(()=>{
    progress.value = song.currentTime;
  },500);
}
progress.onchange = function(){
  song.play();
  song.currentTime = progress.value;
  ctrlIcon.classList.add("fa-pause");
  ctrlIcon.classList.remove("fa-play");

}