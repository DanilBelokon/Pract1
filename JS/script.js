const personalMovieDB = {
  numberOfFilms: 0,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
  start: function () {
    this.numberOfFilms = +prompt("Скольуо фильмов вы уже посмотрели?", "");
    while (
      this.numberOfFilms == "" ||
      this.numberOfFilms == null ||
      isNaN(this.numberOfFilms)
    ) {
      this.numberOfFilms = +prompt("Скольуо фильмов вы уже посмотрели?", "");
    }
  },
  remeberFimlms: function () {
    for (let i = 0; i < 2; i++) {
      let nameCinema = prompt("Один из просмотренных фильмов?", "");
      if (nameCinema == "" || nameCinema == null || nameCinema.length > 50) {
        console.log("1");
        while (
          nameCinema == "" ||
          nameCinema == null ||
          nameCinema.length > 50
        ) {
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
  },
  detectedPers: function () {
    if (personalMovieDB.count < 10) {
      alert("Просмотрено добольно мало фильмов");
    } else if (personalMovieDB.count < 30) {
      alert("Вы классический зритель");
    } else {
      alert("Вы киноман");
    }
  },
  showMyDB: function () {
    if (personalMovieDB.privat == true) {
      console.log(personalMovieDB);
    }
  },
  writeYourGenres: function () {
    for (i = 0; i < 3; i++) {
      personalMovieDB.genres[i] = prompt(
        `Ваш любимый жанр под номером ${i + 1}`,
        ""
      );
      while (
        personalMovieDB.genres[i] == null ||
        personalMovieDB.genres[i] == ""
      ) {
        personalMovieDB.genres[i] = prompt(
          `Ваш любимый жанр под номером ${i + 1}`,
          ""
        );
      }
    }
    personalMovieDB.genres.forEach((value, index) => {
      console.log(`Любимый жанр ${index + 1} - ${value}`);
    });
  },
  toggleVisibleMyDB: function () {
    if (this.privat == false) {
      this.privat = true;
    }
  },
};
personalMovieDB.start();

personalMovieDB.remeberFimlms();

personalMovieDB.detectedPers();

personalMovieDB.writeYourGenres();

personalMovieDB.toggleVisibleMyDB();

personalMovieDB.showMyDB();
