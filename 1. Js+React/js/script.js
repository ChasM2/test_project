/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

'use strict';

// Код возьмите из предыдущего домашнего задания

let numberOfFilms;

function start() {
    numberOfFilms = +prompt("How much films have you seen?", "");

    while (numberOfFilms == "" ||
        numberOfFilms == null ||
        isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("How much films have you seen?", "");
    }
}

start();

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

function rememberMyFilms() {
    let countOfAnsweredQuestions = 0;
    const haveToAnswerCount = 2;

    while (countOfAnsweredQuestions < haveToAnswerCount) {
        let firstAnswer = prompt("What was your last watched film?", "");
        if (firstAnswer == null || firstAnswer === "" || firstAnswer.length > 50) {
            alert("The answer cannot be empty or more than 50 characters!");
            continue;
        }

        let secondAnswer = prompt("What is your mark for it?", "");
        if (secondAnswer == null || secondAnswer === "") {
            continue;
        }

        personalMovieDB.movies[firstAnswer] = secondAnswer;
        countOfAnsweredQuestions++;
    }
}

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        alert("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
        alert("Вы классический зритель");
    } else if (personalMovieDB.count > 30) {
        alert("Вы киноман");
    } else {
        alert("Произошла ошибка");
    }
}


function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

function writeYourGenres() {
    for (let index = 0; index < 3; index++) {
        let genre = prompt(`Ваш любимый жанр под номером ${index + 1}?`, "");
        if (genre !== null && genre != "") {
            personalMovieDB.genres[index] = genre;
        } else {
            index--;
        }
    }
}

detectPersonalLevel();
rememberMyFilms();
writeYourGenres();
showMyDB(personalMovieDB.privat);