"use strict"

let numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели ?", "10");

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
}

for (let i = 0; i < 2; i++) {
    let a = prompt("Один из последних фильмов который вы посмотрели");
    let b = prompt("Как вы его оцените ?");

    if (a != null && b != null && a.length != 0 && b.length != 0 && a.length < 50) {
        personalMovieDB.movies[a] = b;
    } else {
        i--;
    }
}

if (personalMovieDB.count < 10) {
    alert("Просмотренно слишком мало фильмов");
} else if (personalMovieDB > 10 && personalMovieDB < 30) {
    alert("Вы класический зритель");
} else {
    alert("Вы киноман!!!");
}

console.log(personalMovieDB);