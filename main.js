const player = document.querySelector('.video-player');
const play = document.querySelector('.play');
const mute = document.querySelector('.mute');
const volume = document.querySelector('.volume');
const slider = document.querySelector('.slider');
const cursor = document.querySelector('.cursor');


function isPlaying(){
    if (player.paused){
        player.play();
        play.innerHTML = '<img src="img/pause.png">';
    }else {
        player.pause();
        play.innerHTML = '<img src="img/play.png">';

    }
}

function toggleMute(){
    player.muted = !player.muted;
}


function setVolume(value) {
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

slider.addEventListener('click', function (ev) {
    const coeff = (ev.clientX - slider.getBoundingClientRect().x) / slider.getBoundingClientRect().width;
    player.currentTime = coeff * player.duration;
});

setInterval(function () {

    // Update timer track slider
    const trackWidth = slider.getBoundingClientRect().width - cursor.getBoundingClientRect().width;
    const coeff = player.currentTime / player.duration;
    cursor.style.marginLeft = (coeff * trackWidth) + 'px';

    // Check if video ended
    if(player.currentTime === player.duration){
        player.pause();
        player.currentTime = 0;
        play.innerHTML = '<img src="img/play.png">';
    }
}, 100);


