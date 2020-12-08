'use strict';

function User(name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
    this.hello = function () {
        console.log(`Hello ${this.name}!`);
    };
}

User.prototype.exit = function () {
    console.log(`User ${this.name} go away!`);
};

const ivan = new User('Ivan', 33);
const alex = new User('Alex', 27);

ivan.hello();
alex.exit();

console.log(ivan);
console.log(alex);