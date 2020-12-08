'use strict';

// function showThis(a, b) {
//     console.log(this);

//     function sum() {
//         return a + b;
//     }

//     console.log(sum());
// }

// showThis(4, 5);

// const obj = {
//     a: 20,
//     b: 15,
//     sum: function () {
//         console.log(this);
//     }
// };

// obj.sum();

// function User(name, id) {
//     this.name = name;
//     this.id = id;
//     this.human = true;
//     this.hello = function () {
//         console.log(`Hello ${this.name}!`);
//     };
// }

// User.prototype.exit = function () {
//     console.log(`User ${this.name} go away!`);
// };

// const ivan = new User('Ivan', 33); 


// function sayName(sername) {
//     console.log(this);
//     console.log(this.name + sername);
// }

// const user = {
//     name: 'John'
// };

// sayName.call(user, ' Smith');
// sayName.apply(user, [' Smith']);

// function count(num) {
//     return this*num;
// }

// const double = count.bind(2);

// console.log(double(3));
// console.log(double(22));

const btn = document.querySelector('button');

btn.addEventListener('click', event => {
    console.log(this);
    event.target.style.backgroundColor = 'red';
});

const obj = {
    num: 5,
    sayNumber: function () {
        const say = () => {
            console.log(this);
        };

        say();
    }
};

obj.sayNumber();

const double = a => a * 2;

console.log(double(10));

