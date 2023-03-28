let swiper = new Swiper(".my-Swiper-header", {
    direction: "vertical",
    pagination: {
        el: ".my-swiper-pagination",
        clickable: true,
    },
});

let swiper2 = new Swiper(".mySwiper2", {
    slidesPerView: 3,
    spaceBetween: 30,
    cssMode: true,
    navigation: {
        nextEl: ".my-swiper-button-next",
        prevEl: ".my-swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    // mousewheel: true,
    keyboard: true,
});


