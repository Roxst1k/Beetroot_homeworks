"use strict"

let redLight = document.getElementById('red');
let yellowLight = document.getElementById('yellow');
let greenLight = document.getElementById('green');
let buttonClick = document.getElementById('button');
let currentLight = 1;

function switchLights () {
    if(currentLight === 1) {
        redLight.style.opacity = '1';
        greenLight.style.opacity = '0.1'
        currentLight = 2;
    } else if (currentLight === 2) {
        yellowLight.style.opacity = '1';
        redLight.style.opacity = '0.1'
        currentLight = 3;
    } else {
        greenLight.style.opacity = '1';
        yellowLight.style.opacity = '0.1';
        currentLight = 1;
    }
}

buttonClick.addEventListener('click',switchLights);
