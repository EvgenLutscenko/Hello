"use strict"

let numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели ?", "10");

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
}

let a = prompt("Один из последних фильмов который вы посмотрели");
let b = prompt("Как вы его оцените ?");
let c = prompt("Один из последних фильмов который вы посмотрели");
let d = prompt("Как вы его оцените ?");

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);