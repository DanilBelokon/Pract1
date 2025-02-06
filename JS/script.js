const numberOfFilms = 1000;

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

const nameCinema = prompt("Один из просмотренных фильмов?", "");
const golCinema = prompt("На сколько его оцените?", "");

personalMovieDB.movies[nameCinema] = golCinema;
console.log(personalMovieDB.movies);
// personalMovieDB["movies"[prompt("Один из просмотренных фильмов?", "")]] = prompt(
//   "На сколько его оцените?",
//   ""
// );
