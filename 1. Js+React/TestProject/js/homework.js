'use strict';

var employers = ['Alex', '', 'ludmila', 'Viktor', '', 'oleg', 'iNna', 'Ivan', 'Alex', 'Olga', ' Ann'];

var employersNames = [];

employers.forEach(element => {
    employersNames.push(element.toLowerCase().trim());
});

var sponsors = {
    cash: [40000, 5000, 30400, 12000],
    eu: ['SRL', 'PLO', 'J&K'],
    rus: ['RusAuto', 'SBO']
};

function calcCash(own = 0) {
    var everyCash = Array.prototype.slice.call(arguments);
    return everyCash.reduce((acc, cur) => acc + cur);
}

var money = calcCash(null, sponsors.cash);

function makeBusiness(owner, cash, emp, director = 'Victor') {
    var sumSponsors = sponsors.eu.concat(sponsors.rus, 'unexpected sponsor');
    console.log(`We have a business. Owner: ${owner} director: ${director}. Our budget: ${cash}. And our employers: ${emp}`);
    console.log('And we have a sponsors: ');
    console.log.apply(null, sumSponsors);
    console.log(`Note. Be careful with ${sponsors.eu[0]}. It's a huge risk.`);
}

makeBusiness.apply(null, [null, money, employersNames, 'Sam']);