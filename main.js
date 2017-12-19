const player = document.querySelector('.video-player');
const play = document.querySelector('.play');
const stop = document.querySelector('.stop');
const mute = document.querySelector('.mute');
const volume = document.querySelector('.volume');
const fullScreen = document.querySelector('.fullScreen');
const slider = document.querySelector('.slider');
const cursor = document.querySelector('.cursor');
var moviesContainer = document.querySelector(".allMovies");
var titleMovie = document.querySelector(".titleMovie");
var author = document.querySelector(".author");
var description = document.querySelector(".description");
var dataMovies = data.films;

//création du contenu des hover
for (var i = 0; i < dataMovies.length; i++) {

  var videoGrid = document.createElement("div");
  videoGrid.classList.add("videoGrid");
  moviesContainer.appendChild(videoGrid);

  var imgMovie = document.createElement("img");
  imgMovie.classList.add("imgMovieMini");
  imgMovie.setAttribute("src", "img/miniatures/" + dataMovies[i].img);
  videoGrid.appendChild(imgMovie);

  var hoverVideoContainer = document.createElement("div");
  hoverVideoContainer.classList.add("hoverVideoContainer");
  videoGrid.appendChild(hoverVideoContainer);

  var titleMovie = document.createElement("div");
  titleMovie.classList.add("titleMovie");
  titleMovie.textContent = dataMovies[i].title;
  hoverVideoContainer.appendChild(titleMovie);

  var authorMovie = document.createElement("div");
  authorMovie.classList.add("authorMovie");
  authorMovie.textContent = dataMovies[i].author;
  hoverVideoContainer.appendChild(authorMovie);

  var descriptionMovie = document.createElement("div");
  descriptionMovie.classList.add("descriptionMovie");
  descriptionMovie.innerHTML = dataMovies[i].description;
  hoverVideoContainer.appendChild(descriptionMovie);

  var playButtonContainer = document.createElement("div");
  playButtonContainer.classList.add("playButtonContainer");
  videoGrid.appendChild(playButtonContainer);

  var playButtonImg = document.createElement("img");
  playButtonImg.classList.add("playButtonImg");
  playButtonImg.setAttribute('src', 'img/play-button.png');
  playButtonContainer.appendChild(playButtonImg);
}

var allMoviesPlayButton = document.querySelectorAll(".playButtonContainer");
var overlayVideo = document.querySelector(".overlayVideo");

//clic sur le bouton plus du hover
for (let a = 0; a < allMoviesPlayButton.length; a++) {
  allMoviesPlayButton[a].addEventListener("click", function() {
    console.log(dataMovies[a]);

    var titleMovieOverlay = document.createElement("div");
    titleMovieOverlay.classList.add("titleMovieOverlay");
    titleMovieOverlay.innerHTML = dataMovies[a].title;
    overlayVideo.appendChild(titleMovieOverlay);

    var tagMovieOverlay = document.createElement("div");
    titleMovieOverlay.classList.add("titleMovieOverlay");
    titleMovieOverlay.innerHTML = dataMovies[a].title;
    overlayVideo.appendChild(titleMovieOverlay);


    overlayVideo.style.display = "block";

    // player.setAttribute("src", "videos/" + dataMovies[a].src);
    // isPlaying();
  })
}


//FUNCTIONS
function isPlaying() {
  if (player.paused) {
    player.play();
    play.innerHTML = '<img src="img/pause.png">';
  } else {
    player.pause();
    play.innerHTML = '<img src="img/play.png">';

  }
}

function toggleMute() {
  player.muted = !player.muted;
}

function setVolume(value) {
  player.volume = Math.max(Math.min(value, 1), 0);
}

// PLAY
play.addEventListener('click', isPlaying);
player.addEventListener('click', isPlaying);

// STOP
function estop() {
  player.pause();
  player.currentTime = 0;
  play.innerHTML = '<img src="img/play.png">';
}
stop.addEventListener('click', estop);


document.body.onkeyup = function(e) {
  if (e.keyCode === 32) {
    isPlaying();
  }
};

// MUTE
mute.addEventListener('click', toggleMute);

// VOLUME
volume.addEventListener('change', (ev) => setVolume(ev.target.value));


// FULL SCREEN
fullScreen.addEventListener('click', function() {
  if (player.requestFullscreen) {
    player.requestFullscreen();
  } else if (player.mozRequestFullScreen) {
    player.mozRequestFullScreen();
  } else if (player.webkitRequestFullscreen) {
    player.webkitRequestFullscreen();
  }
});

// SLIDER
slider.addEventListener('click', function(ev) {
  const coeff = (ev.clientX - slider.getBoundingClientRect().x) / slider.getBoundingClientRect().width;
  player.currentTime = coeff * player.duration;
});

setInterval(function() {

  // Update timer track slider
  const trackWidth = slider.getBoundingClientRect().width - cursor.getBoundingClientRect().width;
  const coeff = player.currentTime / player.duration;
  cursor.style.marginLeft = (coeff * trackWidth) + 'px';

  // Check if video ended
  if (player.currentTime === player.duration) {
    player.pause();
    player.currentTime = 0;
    play.innerHTML = '<img src="img/play.png">';
  }
}, 100);
