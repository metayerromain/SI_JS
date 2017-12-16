const player = document.querySelector('.video-player');
const play = document.querySelector('.play');
const mute = document.querySelector('.mute');
const volume = document.querySelector('.volume');
const slider = document.querySelector('.slider');


function isPlaying(){
    if (player.paused){
        player.play();
        play.innerHTML = '<img src="pause.png">';
    }else {
        player.pause();
        play.innerHTML = '<img src="play.png">';

    }
}

function toggleMute(){
    player.muted = !player.muted;
}


function setVolume(value) {
    console.log(value);
    player.volume = Math.max(Math.min(value, 1), 0);
}

play.addEventListener('click', isPlaying);
player.addEventListener('click', isPlaying);

document.body.onkeyup = function(e){
    if(e.keyCode === 32){
        isPlaying();
    }
};

mute.addEventListener('click', toggleMute);
volume.addEventListener('change', (ev) => setVolume(ev.target.value));

slider.addEventListener('change', function (ev) {
    player.currentTime = ev.target.value * player.duration;
});

setInterval(function () {
  slider.value = player.currentTime / player.duration;
}, 1000);
