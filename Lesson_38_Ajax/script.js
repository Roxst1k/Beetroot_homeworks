"use strict";

const apiKey = '78e2711d';
let movieData;
let moviesHTML = document.querySelector('#movies');
let total = document.querySelector('#total');
let pageNumber = 1;


$.get(`https://www.omdbapi.com/?page=1&s=Inter&apikey=${apiKey}`, (data) => setAllFilms(data));
$('#prevButton').on('click', () => {
    if (pageNumber === 1) {
        console.log('page number cant be least than 1')
    } else {
        pageNumber -= 1;
        $.get(`https://www.omdbapi.com/?page=${pageNumber}&s=Inter&apikey=${apiKey}`, (data) => setAllFilms(data));
    }
})

$('#nextButton').on('click', () => {
    if ((pageNumber * 10) >  movieData.totalResults) {
        console.log('Its last page')
    } else {
        pageNumber += 1;
        $.get(`https://www.omdbapi.com/?page=${pageNumber}&s=Inter&apikey=${apiKey}`, (data) => setAllFilms(data));
    }
})




function setData(data) {
    movieData = data;
    $('#title').text(movieData.Title);
    $('#actors').text('Actors : ' + movieData.Actors);
    $('#awards').text('Awards : ' + movieData.Awards);
    $('#movie-image').attr('src',movieData.Poster);
}

$('.button').click(function() {
    $('.result').css('display', 'block');
    let inputValue = $('#search').val();
    inputValue = inputValue.replace(/\s+/g,'+');
    $.get(`https://www.omdbapi.com/?t=${inputValue}&apikey=${apiKey}`, (data) => setData(data));
});


function setAllFilms(data) {
    $('#movies').empty();
    movieData = data;
    movieData.Search.forEach((searchItem) => {
        let searchHtmlElement = document.createElement('span');
        searchHtmlElement.classList.add('film-title');
        searchHtmlElement.innerText = searchItem.Title + '\n';
        moviesHTML.appendChild(searchHtmlElement);
        total.innerHTML = movieData.totalResults;
        document.getElementById('page').innerText = pageNumber;
    })
}
