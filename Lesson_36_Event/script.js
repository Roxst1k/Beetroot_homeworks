"use strict";

let content = document.getElementById('content');
let textarea = document.getElementById('textarea');
let text = document.getElementById('text');

document.addEventListener("keydown", function (event){
    if(event.code === 'KeyE' && event.shiftKey) {
        textarea.style.display = 'block';
    } if (event.code === 'KeyS' && event.shiftKey) {
        saveText();
        loadText();
        textarea.style.display = 'none';
    }
});

function saveText() {
    localStorage.setItem('savedText', textarea.value);
}

function loadText() {
    if (localStorage.getItem('savedText')) {
        text.innerHTML = localStorage.getItem('savedText');
    }
}
