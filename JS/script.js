const numberOfFilms = 1000;

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

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

if (personalMovieDB.count < 10) {
  alert("Просмотрено добольно мало фильмов");
} else if (personalMovieDB.count < 30) {
  alert("Вы классический зритель");
} else {
  alert("Вы киноман");
}

console.log(personalMovieDB.movies);
// personalMovieDB["movies"[prompt("Один из просмотренных фильмов?", "")]] = prompt(
//   "На сколько его оцените?",
//   ""
// );
