const btn = document.querySelector('button'),
    btns = document.querySelectorAll('button'),
    overlay = document.querySelector('.overlay');

// btn.onclick = function() {
//     alert('click');
// };


// btn.onclick = function() {
//     alert('second click');
// };
let i = 0;
const deleteElement = (e) => {
    console.log(e.target);
    console.log(e.type);
    // e.target.remove();
    // console.log('hover!');
    // i++;
    // if (i === 2) {
    //     btn.removeEventListener('click', deleteElement);
    // }

};

btn.addEventListener('click', deleteElement);
overlay.addEventListener('click', deleteElement);


// btn.addEventListener('click', () => {
//     alert('Second Click!');
// });

// Remove/Cancel standard browser behavior

const link = document.querySelector('a');

link.addEventListener('click', function (event) {
    event.preventDefault();
    console.log(event.target);
});

btns.forEach(item => item.addEventListener('click', function (event) {
    console.log(`Target: ${event.target}, type: ${event.type}`);
}));