let numberOfFilms;

function start() {
  numberOfFilms = +prompt("Скольуо фильмов вы уже посмотрели?", "");
  while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt("Скольуо фильмов вы уже посмотрели?", "");
  }
}
start();
const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

function remeberFimlms() {
  for (let i = 0; i < 2; i++) {
    let nameCinema = prompt("Один из просмотренных фильмов?", "");
    if (nameCinema == "" || nameCinema == null || nameCinema.length > 50) {
      console.log("1");
      while (nameCinema == "" || nameCinema == null || nameCinema.length > 50) {
        nameCinema = prompt("Один из просмотренных фильмов?", "");
      }
    }
    let golCinema = prompt("На сколько его оцените?", "");
    if (golCinema == "" || golCinema == null) {
      while (golCinema == "" || golCinema == null) {
        golCinema = prompt("На сколько его оцените?", "");
      }
    }
    personalMovieDB.movies[nameCinema] = golCinema;
  }
}

remeberFimlms();

function detectedPers() {
  if (personalMovieDB.count < 10) {
    alert("Просмотрено добольно мало фильмов");
  } else if (personalMovieDB.count < 30) {
    alert("Вы классический зритель");
  } else {
    alert("Вы киноман");
  }
}
detectedPers();

function showMyDB() {
  if (personalMovieDB.privat == false) {
    console.log(personalMovieDB);
  }
}

function writeYourGenres() {
  for (i = 0; i < 3; i++) {
    personalMovieDB.genres[i] = prompt(
      `Ваш любимый жанр под номером ${i + 1}`,
      ""
    );
  }
}
writeYourGenres();
showMyDB();
