/* Задание на урок:

1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/

'use strict';

// Код возьмите из предыдущего домашнего задания

let personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        personalMovieDB = +prompt("How much films have you seen?", "");

        while (personalMovieDB.count == "" ||
            personalMovieDB.count == null ||
            isNaN(personalMovieDB.count)) {
                personalMovieDB.count = +prompt("How much films have you seen?", "");
        }
    },
    rememberMyFilms: function() {
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
            this.movies[firstAnswer] = secondAnswer;
            countOfAnsweredQuestions++;
        }
    },
    detectPersonalLevel: function() {
        if (this.count < 10) {
            alert("Просмотрено довольно мало фильмов");
        } else if (this.count > 10 && this.count < 30) {
            alert("Вы классический зритель");
        } else if (this.count > 30) {
            alert("Вы киноман");
        } else {
            alert("Произошла ошибка");
        }
    },
    showMyDB: function () {
        if (!this.privat) {
            console.log(personalMovieDB);
        } else {
            console.log("Db is private");
        }
    },
    writeYourGenres: function () {
        for (let index = 0; index < 3; index++) {
            let genre = prompt(`Ваш любимый жанр под номером ${index + 1}?`, "");
            if (genre !== null && genre != "") {
                personalMovieDB.genres[index] = genre;
            } else {
                index--;
            }
        }

        let i = 1;
        personalMovieDB.genres.forEach((item) => {
            console.log(`Любимый жанр #(${i++}) - это (${item})`);
        });
    },
    toggleVisibleMyDB: function(){
        personalMovieDB.privat = !personalMovieDB.privat;
    }
};

personalMovieDB.start();
personalMovieDB.detectPersonalLevel();
personalMovieDB.rememberMyFilms();
personalMovieDB.writeYourGenres();
personalMovieDB.showMyDB();
personalMovieDB.toggleVisibleMyDB();
personalMovieDB.showMyDB();