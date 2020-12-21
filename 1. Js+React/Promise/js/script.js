"use strict";

// console.log('Request of the data...');

// const req = new Promise(function (resolve, reject) {
//     setTimeout(() => {
//         console.log("Data preparation...");
//         const product = {
//             name: 'TV',
//             price: 2000
//         };

//         resolve(product);
//     }, 2000);
// });

// req.then((product) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             product.status = 'order';

//             resolve(product);
//         }, 2000);
//     });
// }).then(data => {
//     data.modify = true;
//     return data;
// }).then(data => {
//     console.log(data);
// }).catch(() => {
//     console.error('Error is occured!');
// }).finally(() => {
//     console.log('finally');
// });

const test = timeout => {
    return new Promise(resolve => {
        setTimeout(() => resolve(), timeout);
    });
};

test(1000).then(() => console.log('ba-da-bym 1000'));
test(2000).then(() => console.log('ba-da-bym 2000'));


// Promise.all([test(1000), test(2000)]).then(() => {
//     console.log('All');
// });

Promise.race([test(1000), test(2000)]).then(() => {
    console.log('All');
});

