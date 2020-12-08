"use strict";

const soldier = {
    health: 400,
    armor: 100,
    sayhello: function () {
        console.log(`Helllo ${this.health}`);
    }
};

const jonh = {
    health: 100
};

// jonh.__proto__ = soldier;

Object.setPrototypeOf(jonh, soldier);

// console.log(jonh.sayhello());

jonh.sayhello();
