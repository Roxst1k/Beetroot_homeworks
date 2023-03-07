"use strict";

let playList = [

    {
        author: "LED ZEPPELIN",
        song:"STAIRWAY TO HEAVEN"
    },
    {
        author: "QUEEN",
        song:"BOHEMIAN RHAPSODY"
    },
    {
        author: "LYNYRD SKYNYRD",
        song:"FREE BIRD"
    },
    {
        author: "DEEP PURPLE",
        song:"SMOKE ON THE WATER"
    },
    {
        author: "JIMI HENDRIX",
        song:"ALL ALONG THE WATCHTOWER"
    },
    {
        author: "AC/DC",
        song:"BACK IN BLACK"
    },
    {
        author: "QUEEN",
        song:"WE WILL ROCK YOU"
    },
    {
        author: "METALLICA",
        song:"ENTER SANDMAN"
    }
];

let newPlayList = document.getElementById('playlist');

playList.forEach(function(obj) {
    let list = document.createElement('li');
    list.textContent = obj.author + ':' + obj.song;
    newPlayList.appendChild(list);
});

let openModalButton = document.getElementById('button_open');
let closeModalButton = document.getElementById('button-close');
let modal = document.getElementById('modal');

openModalButton.addEventListener('click', function (){
    modal.style.display = 'block';
});

closeModalButton.addEventListener('click', function (){
    modal.style.display = 'none';
});

window.addEventListener('click', function(event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});