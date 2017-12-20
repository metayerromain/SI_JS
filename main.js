const controlsHideTime = 4000;

const playerContainer = document.querySelector('.player-container');
const player = document.querySelector('.video-player');
const play = document.querySelector('.play');
const stop = document.querySelector('.stop');
const mute = document.querySelector('.mute');
const volumeImg = document.querySelector('.volume-img')
const volume = document.querySelector('.volume');
const fullScreen = document.querySelector('.fullScreen-button');
const slider = document.querySelector('.slider');
const cursor = document.querySelector('.cursor');
const controls = document.querySelector('.media-controls');
const timeLeft = document.querySelector('.duration');
const tags = document.querySelectorAll('.tags');
let controlsCanHide = true;
let hideControlsTimeout = null;
const volumeOverlay = document.querySelector('.volumeOverlay');

var moviesContainer = document.querySelector(".allMovies");
var titleMovie = document.querySelector(".titleMovie");
var author = document.querySelector(".author");
var description = document.querySelector(".description");
var recentMovieContainer = document.querySelector(".recent");
var notreSelectionContainer = document.querySelector(".notreSelection");
var dataMovies = data.films;

var currenta;

//création des cases des films Notre Selection et du contenu des hover
for (var z = 0; z < dataMovies.length; z++) {
  if (dataMovies[z].rating == 5) {

    var notreSelection = document.createElement("div");
    notreSelection.classList.add("film");
    notreSelectionContainer.appendChild(notreSelection);

    notreSelection.setAttribute("name", z);

    var imgMovie = document.createElement("img");
    imgMovie.classList.add("imgMovieMini");
    imgMovie.setAttribute("src", "img/miniatures/" + dataMovies[z].img);
    notreSelection.appendChild(imgMovie);

    var hoverVideoContainer = document.createElement("div");
    hoverVideoContainer.classList.add("hoverVideoContainer");
    notreSelection.appendChild(hoverVideoContainer);

    var titleMovie = document.createElement("div");
    titleMovie.classList.add("titleMovie");
    titleMovie.textContent = dataMovies[z].title;
    notreSelection.appendChild(titleMovie);

    var authorMovie = document.createElement("div");
    authorMovie.classList.add("authorMovie");
    authorMovie.textContent = dataMovies[z].author;
    hoverVideoContainer.appendChild(authorMovie);

    var plusButtonContainerSelection = document.createElement("div");
    plusButtonContainerSelection.classList.add("plusButtonContainerSelection");
    notreSelection.appendChild(plusButtonContainerSelection);

    var playButtonImg = document.createElement("img");
    playButtonImg.classList.add("playButtonImg");
    playButtonImg.setAttribute('src', 'img/logo_plus.png');
    plusButtonContainerSelection.appendChild(playButtonImg);
  }
  if (recentMovieContainer.children.length >= 3) {
    y = 999;
  }
}

//création des cases de tous les films et du contenu des hover
for (var i = 0; i < dataMovies.length; i++) {

  var videoGrid = document.createElement("div");
  videoGrid.classList.add("videoGrid");
  videoGrid.dataset.category = dataMovies[i].category;
  moviesContainer.appendChild(videoGrid);

  videoGrid.setAttribute("name", i);

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
  videoGrid.appendChild(titleMovie);

  var authorMovie = document.createElement("div");
  authorMovie.classList.add("authorMovie");
  authorMovie.textContent = dataMovies[i].author;
  hoverVideoContainer.appendChild(authorMovie);

  var playButtonContainer = document.createElement("div");
  playButtonContainer.classList.add("playButtonContainer");
  videoGrid.appendChild(playButtonContainer);

  var playButtonImg = document.createElement("img");
  playButtonImg.classList.add("playButtonImg");
  playButtonImg.setAttribute('src', 'img/logo_plus.png');
  playButtonContainer.appendChild(playButtonImg);
}

//création des cases des films récents et du contenu des hover
for (var y = 0; y < dataMovies.length; y++) {
  if (dataMovies[y].year == 2017 || dataMovies[y].year == 2016) {

    var recentMovie = document.createElement("div");
    recentMovie.classList.add("film");
    recentMovieContainer.appendChild(recentMovie);

    recentMovie.setAttribute("name", y);

    var imgMovie = document.createElement("img");
    imgMovie.classList.add("imgMovieMini");
    imgMovie.setAttribute("src", "img/miniatures/" + dataMovies[y].img);
    recentMovie.appendChild(imgMovie);

    var hoverVideoContainer = document.createElement("div");
    hoverVideoContainer.classList.add("hoverVideoContainer");
    recentMovie.appendChild(hoverVideoContainer);

    var titleMovie = document.createElement("div");
    titleMovie.classList.add("titleMovie");
    titleMovie.textContent = dataMovies[y].title;
    recentMovie.appendChild(titleMovie);

    var authorMovie = document.createElement("div");
    authorMovie.classList.add("authorMovie");
    authorMovie.textContent = dataMovies[y].author;
    hoverVideoContainer.appendChild(authorMovie);

    var playButtonContainer = document.createElement("div");
    playButtonContainer.classList.add("playButtonContainerRecent");
    recentMovie.appendChild(playButtonContainer);

    var playButtonImg = document.createElement("img");
    playButtonImg.classList.add("playButtonImg");
    playButtonImg.setAttribute('src', 'img/logo_plus.png');
    playButtonContainer.appendChild(playButtonImg);
  }
  if (recentMovieContainer.children.length >= 3) {
    y = 999;
  }
}

//Séléction des élèments du DOM générés dans l'overlay
var body = document.querySelector("body");
var allMoviesPlayButton = document.querySelectorAll(".playButtonContainer");
var playButtonContainerRecent = document.querySelectorAll(".playButtonContainerRecent");
var overlayVideo = document.querySelector(".overlayContainer");
var retourTitle = document.querySelector(".retourTitle");
var imgContainer = document.querySelector(".imgContainer");
var overlayMovieTitle = document.querySelector(".overlayMovieTitle");
var overlayStars = document.querySelector(".overlayStars");
var overlayRating = document.querySelector(".overlayRating");
var overlayDuration = document.querySelector(".overlayDuration");
var overlayDate = document.querySelector(".overlayDate");
var overlayDescription2 = document.querySelector(".overlayDescription2");
var overlayGenre = document.querySelector(".overlayGenre");
var star0 = document.querySelector(".star0");
var star1 = document.querySelector(".star1");
var star2 = document.querySelector(".star2");
var star3 = document.querySelector(".star3");
var star4 = document.querySelector(".star4");
var star5 = document.querySelector(".star5");
var imgOverlay = document.createElement("img");

//évènement clic sur le bouton retour
retourTitle.addEventListener("click", function() {
  overlayVideo.style.display = "none";
  imgOverlay.classList.remove("imgOverlay");
  star0.style.display = 'none';
  star1.style.display = 'none';
  star2.style.display = 'none';
  star3.style.display = 'none';
  star4.style.display = 'none';
  star5.style.display = 'none';
  body.style.overflow = "visible";
});

//fonction qui fait pop l'overlay avec les infos nécéssaires
function overlayPop(currenta) {
  body.style.overflow = "hidden";

  imgOverlay.classList.add("imgOverlay");
  imgOverlay.setAttribute('src', 'img/miniatures/' + dataMovies[currenta].img);
  imgContainer.appendChild(imgOverlay);

  overlayMovieTitle.innerHTML = dataMovies[currenta].title;
  overlayRating.innerHTML = dataMovies[currenta].rating + "/5";
  overlayDuration.innerHTML = dataMovies[currenta].duration + " min";
  overlayDate.innerHTML = dataMovies[currenta].year;
  overlayDescription2.innerHTML = dataMovies[currenta].description;
  overlayGenre.innerHTML = dataMovies[currenta].category;

  if (Math.floor(dataMovies[currenta].rating) === 0) {
    star0.style.display = 'inline';
  }
  if (Math.floor(dataMovies[currenta].rating) === 1) {
    star1.style.display = 'inline';
  }
  if (Math.floor(dataMovies[currenta].rating) === 2) {
    star2.style.display = 'inline';
  }
  if (Math.floor(dataMovies[currenta].rating) === 3) {
    star3.style.display = 'inline';
  }
  if (Math.floor(dataMovies[currenta].rating) === 4) {
    star4.style.display = 'inline';
  }
  if (Math.floor(dataMovies[currenta].rating) === 5) {
    star5.style.display = 'inline';
  }

  overlayVideo.style.display = "block";
}

//évènement clic sur le bouton "plus" des FILMS RECENTS du hover pour apparition de l'Overlay
for (let c = 0; c < plusButtonContainerSelection.length; c++) {
  playButtonContainerRecent[c].addEventListener("click", function() {
    currenta = parseInt(plusButtonContainerSelection[b].parentElement.getAttribute("name"));

    overlayPop(currenta);
  })
}

//évènement clic sur le bouton "plus" des FILMS RECENTS du hover pour apparition de l'Overlay
for (let b = 0; b < playButtonContainerRecent.length; b++) {
  playButtonContainerRecent[b].addEventListener("click", function() {
    currenta = parseInt(playButtonContainerRecent[b].parentElement.getAttribute("name"));

    overlayPop(currenta);
  })
}

//évènement clic sur le bouton "plus" du hover pour apparition de l'Overlay
for (let a = 0; a < allMoviesPlayButton.length; a++) {
  allMoviesPlayButton[a].addEventListener("click", function() {
    currenta = parseInt(allMoviesPlayButton[a].parentElement.getAttribute("name"));

    overlayPop(currenta);
  })
}

var lowOpacity = document.querySelector(".lowOpacity");
var imgStartPlayer = document.querySelector(".imgContainer");

//apparition du player video pour
imgStartPlayer.addEventListener("click", function() {
  playerContainer.style.display = "block";
  lowOpacity.style.display = "block";
  player.setAttribute("src", "videos/" + dataMovies[currenta].src);
  togglePlaying();
});

//clic sur l'opacité pour quitter la vidéo
lowOpacity.addEventListener("click", function() {
  playerContainer.style.display = "none";
  lowOpacity.style.display = "none";
  player.setAttribute("src", "");
});

//PLAYER VIDEO
function togglePlaying() {
  if (player.paused) {
    player.play();
    play.querySelector("img").src = "img/pause.png";
  } else {
    player.pause();
    play.querySelector("img").src = "img/play.png";
  }
}

function setMuted(isMuted) {
  player.muted = isMuted;

  if (player.muted) {
    volume.value = 0;
    volumeImg.src = 'img/mute.png';
  } else {
    volume.value = player.volume;
    volumeImg.src = 'img/volume.png';
  }
}


function setVolume(value) {
  setMuted(false);
  player.volume = Math.max(Math.min(value, 1), 0);

}

function formatTime(time) {
  if (time < 1) return '00:00';

  const hours = Math.floor(time / 3600);
  const minutes = Math.floor((time / 60) % 60); // modulo 60 is useful if the time is longer than one hour
  const seconds = Math.floor(time % 60);

  let formattedTime = "";

  if (hours !== 0) {
    formattedTime += hours + ':';
  }

  formattedTime += minutes.toString().padStart(2, '0') + ':' + seconds.toString().padStart(2, '0');

  return formattedTime;
}


// PLAY

play.addEventListener('click', togglePlaying);
player.addEventListener('click', togglePlaying);


// STOP

stop.addEventListener('click', function() {
  player.pause();
  player.currentTime = 0;
  play.innerHTML = '<img src="img/play.png">';
});


document.body.onkeyup = function(e) {
  if (e.keyCode === 32) {
    togglePlaying();
  }
};



// VOLUME
volume.addEventListener('input', (ev) => setVolume(ev.target.value));

volumeImg.addEventListener('click', function() {
  setMuted(!player.muted);
});


// FULL SCREEN
function toggleFullscreen() {

  if (document.fullscreenElement || document.webkitFullscreenElement || document.mozFullscreenElement) {

    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.mozExitFullScreen) {
      document.mozExitFullScreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    }

    playerContainer.classList.remove('fullscreen');
    fullScreen.querySelector("img").src = "img/full_screen.png";
  } else {
    if (player.requestFullscreen) {
      player.requestFullscreen();
    } else if (player.mozRequestFullScreen) {
      player.mozRequestFullScreen();
    } else if (player.webkitRequestFullscreen) {
      player.webkitRequestFullscreen();
    }

    playerContainer.classList.add('fullscreen');
    fullScreen.querySelector("img").src = "img/shrink.png";

  }
}

player.addEventListener('dblclick', toggleFullscreen);
fullScreen.addEventListener('click', toggleFullscreen);

// SLIDER

slider.addEventListener('click', function(ev) {
  const coeff = (ev.clientX - slider.getBoundingClientRect().x) / slider.getBoundingClientRect().width;
  player.currentTime = coeff * player.duration;
});




player.addEventListener('timeupdate', function() {
  // Update timer track slider
  const trackWidth = slider.getBoundingClientRect().width;
  const coeff = player.currentTime / player.duration;
  cursor.style.width = (coeff * trackWidth) + 'px';
  timeLeft.innerHTML = formatTime(player.currentTime % 60) + '/' + formatTime(player.duration);


  // Check if video ended
  if (player.currentTime === player.duration) {
    player.pause();
    player.currentTime = 0;
    play.innerHTML = '<img src="img/play.png">';
  }
});

// CONTROLS
function hideControls() {
  if (player.paused) return;
  controls.classList.add('hidden');
}

function showControls() {
  controls.classList.remove('hidden');
}

player.addEventListener('play', function() {
  if (false === controlsCanHide) return;


  hideControlsTimeout = setTimeout(function() {
    hideControls();
  }, controlsHideTime);
});

player.addEventListener('mousemove', function() {
  clearTimeout(hideControlsTimeout);
  showControls();

  if (false === controlsCanHide) return;

  hideControlsTimeout = setTimeout(function() {
    hideControls();
  }, controlsHideTime);
});

player.addEventListener('pause', function() {
  clearTimeout(hideControlsTimeout);
  showControls();
});

controls.addEventListener('mouseenter', function() {
  controlsCanHide = false;
  clearTimeout(hideControlsTimeout);
  showControls();
}, true);

controls.addEventListener('mouseleave', function() {
  controlsCanHide = true;
}, true);

// INIT
player.volume = volume.value;

//tags

const pickedTags = [];

function updateFilter() {
  console.log(pickedTags);
  if (pickedTags.length === 0) {
    for (let i = 0; i < moviesContainer.children.length; i++) {
      moviesContainer.children[i].style.display = '';
    }
    return;
  }

  for (let movieIndex = 0; movieIndex < moviesContainer.children.length; movieIndex++) {
    const movieElement = moviesContainer.children[movieIndex];
    let isVisible = pickedTags.indexOf(movieElement.dataset.category) !== -1;

    movieElement.style.display = isVisible ? '' : 'none';
  }
}

for (let i = 0; i < tags.length; i++) {
  tags[i].addEventListener('click', function() {
    if (this.classList.contains('tag-highlight')) {
      this.classList.remove('tag-highlight');
      pickedTags.splice(pickedTags.indexOf(this.dataset.category), 1);
    } else {
      this.classList.add('tag-highlight');
      pickedTags.push(this.dataset.category);
    }
    updateFilter();
  });
}

//tags
