"use strict"

let personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: true,
    start: function() {
        for (let i = 0; i < 1; i++) {
            let a = +prompt("Количество фильмов которые вы посмотрели");

            if (a == null || a == "" || isNaN(a) == true) {
                i--;
            } else {
                personalMovieDB.count = a;
            }
        }
    },
    rememberMyFilms: function() {
        for (let i = 0; i < 2; i++) {
            let a = prompt("Один из последних фильмов который вы посмотрели");
            let b = prompt("Как вы его оцените ?");

            if (a != null && b != null && a.length != 0 && b.length != 0 && a.length < 50) {
                personalMovieDB.movies[a] = b;
            } else {
                i--;
            }
        }
    },
    writeYoreGenres: function() {
        for (let i = 0; i < 1; i++) {
            let a = +prompt("Сколько у вас любимых жанров");
            if (isNaN(a) == false) {
                for (let i = 1; i <= a; i++) {
                    personalMovieDB.genres[i - 1] = prompt(`Введите ваш любимый жанр под номером ${i}`);
                }
            } else {
                i--;
            }
        }

    },
    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10) {
            alert("Просмотренно слишком мало фильмов");
        } else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
            alert("Вы класический зритель");
        } else {
            alert("Вы киноман!!!");
        }
    },
    showMyDB: function() {
        if (personalMovieDB.privat == false) {
            console.log(personalMovieDB);
        }
    },
    togleVisibleMyDB: function() {
        if (personalMovieDB.privat == false) {
            personalMovieDB.privat = true;
        } else {
            personalMovieDB.privat = false;
        }
    },
}

personalMovieDB.start();

personalMovieDB.rememberMyFilms();

personalMovieDB.writeYoreGenres();

personalMovieDB.detectPersonalLevel();

personalMovieDB.togleVisibleMyDB();

personalMovieDB.showMyDB();