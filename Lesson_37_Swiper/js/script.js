"use strict";

let swiper1 = new Swiper(".mySwiper", {
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});


let swiper2 = new Swiper(".mySwiper2", {
    slidesPerView: 5,
    spaceBetween: 20,
    navigation: {
        nextEl: ".swiper-button-next-welcome-screen",
        prevEl: ".swiper-button-prev-welcome-screen",
    },
    loop: true,
});

let swiper3 = new Swiper('.mySwiper3', {
    slidesPerView: 9,
    spaceBetween: 20,
    navigation: {
        nextEl: ".swiper-button-next-partners",
        prevEl: ".swiper-button-prev-partners",
    },
    loop: true,
});

