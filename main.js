var videoContainer = document.querySelector(".video-player");
var moviesContainer = document.querySelector(".liste");

for (var i = 0; i < data.films.length; i++) {
  var linkFilm = moviesContainer.innerHTML += "<p class = fanMovie>" + data.films[i].src + "</p>";
}

var allMovies = document.querySelectorAll(".fanMovie");

for (let a = 0; a < allMovies.length; a++) {
  allMovies[a].addEventListener("click", function() {
    videoContainer.innerHTML = "<source src=" + "videos/" + allMovies[a].innerHTML + " " + "type=" + "video/mp4" + ">"
  })
}
