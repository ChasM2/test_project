'use strict';

const inputRub = document.querySelector('#rub'),
    inputUsd = document.querySelector('#usd');

    inputRub.addEventListener('input', () => {
        const request = new XMLHttpRequest();

        request.open("GET", 'js/current1.json');
        request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
        request.send();

        // status 
        // statusText
        // response
        // readyState


        // request.addEventListener('readystatechange', () => {
        request.addEventListener('load', () => {
            if (request.status === 200) {
                console.log(request.response);
                const data = JSON.parse(request.response);

                inputUsd.value = (+inputRub.value / data.current.usd).toFixed(2);
            } else {
                inputUsd.value = "Something wrong!";
            }
        });
    });