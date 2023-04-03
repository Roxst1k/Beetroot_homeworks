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
    slidesToScroll: 1,
    cssMode: true,
    navigation: {
        nextEl: ".my-swiper-button-next",
        prevEl: ".my-swiper-button-prev",
    },
    pagination: {
        el: ".my-swiper-pagination",
        clickable: true,
    },
    // mousewheel: true,
    keyboard: true,
});


const scrollButton = document.getElementById("scrollTo");
const scrollToElement = document.getElementById("about-us");

scrollButton.addEventListener("click", function() {
    scrollToElement.scrollIntoView({behavior: "smooth"});
});





let images = document.querySelectorAll('.my-gallery img');
for (let i = 0; i < images.length; i++) {
    images[i].addEventListener('click', function(event) {
        let modalBox = document.querySelector('.modal__box');
        let modalImg = document.createElement('img');
        let imgSrc = event.target.getAttribute('src');
        modalImg.setAttribute('src', imgSrc);
        modalBox.appendChild(modalImg);
        let modal = document.querySelector('.modal');
        modal.classList.add('open');
    });
}

let modal = document.querySelector('.modal');
modal.addEventListener('click', function() {
    this.classList.remove('open');
    let modalBox = document.querySelector('.modal__box');
    modalBox.innerHTML = '';
});
window.addEventListener('keydown', (e) => {
    if (e.key === "Escape") {
        document.getElementById('my-modal').classList.remove('open');
    }
})





// AIzaSyCgZSVAor--j3MifEqAQfmGeJzIwa_8_Kc


function initMap() {
    const position = { lat: 46.46421, lng: 30.61518 };
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 15,
        center: position,
    });
    const marker = new google.maps.Marker({
        position,
        map,
    });

}

window.initMap = initMap;
