'use strict';

// filter

// const names = ['Ivan', 'Ann', 'Ksenia', 'Voldemart'];

// const filtered = names.filter(item => item.length <= 5);

// console.log(filtered);

// let answers = ['IvaN', 'AnnA', 'HeLlo'];

// answers = answers.map(item => item.toLowerCase());

// console.log(answers);

// every/some

// const some = ['', 'Ivan', 'Ann', 'Ksenia', 'Voldemart'];

// console.log('some ' + some.some(item => typeof(item) === 'string'));
// console.log('every ' + some.every(item => typeof(item) === 'string'));

// // reduce

// const arr = [4, 5, 1, 3, 2, 6];

// const result = arr.reduce((sum, current) => sum + current);

// console.log(result);

const obj = {
    ivan: 'persone',
    ann: 'persone',
    dog: 'animal',
    cat: 'animal',
};

const newArr = Object.entries(obj)
    .filter(item => item[1] === 'persone')
    .map(item => item[0]);

console.log(newArr);

