'use strict';

const now = new Date('2020-12-07');

// new Date.parse('2020-12-07');

// console.log(now.getFullYear());
// console.log(now.getMonth());
// console.log(now.getDate());
// console.log(now.getDay());

// console.log(now.getTime());

// console.log(now.setHours(40));

// console.log(now)

let start = new Date();


for (let index = 0; index < 10000000; index++) {
    let some = index ** 3;
}

let end = new Date();

alert(`For works ${end - start} ms`);
