/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/

'use strict';

// Код возьмите из предыдущего домашнего задания

let numberOfFilms = +prompt("How much films have you seen?", "");

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

if (personalMovieDB.count < 10) {
    alert("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
    alert("Вы классический зритель");
} else if (personalMovieDB.count > 30) {
    alert("Вы киноман");
} else {
    alert("Произошла ошибка");
}

let countOfAnsweredQuestions = 0;
const haveToAnswerCount = 2;

while(countOfAnsweredQuestions < haveToAnswerCount) {
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

console.log(personalMovieDB);