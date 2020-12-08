'use strict';

function first() {
    // do something
    setTimeout(function() {
        console.log(1);
    }, 500);
}

function second() {
    // do something
    console.log(2);
}

first();
second();

function learnJS(lang, callback) {
    console.log(`I'm learning: ${lang}`);
    callback();
}

learnJS('JavaScript', () => {
    console.log("I have finished the lesson!");
});

let names = ['Ivan', 'Ann', 'Ksenia', 'Voldemar'];

let shortName = names.filter((name) => {
    return name.length < 5;
});

console.log(shortName);

let answers = ['IvAn', 'AnNa', 'HeLla'];

answers = answers.map((item) => item.toLocaleLowerCase());

console.log(answers);