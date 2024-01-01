let slideIndexMobile = 0;
const totalSlidesMobile = document.querySelectorAll('.slideMobile').length;

function showSlideMobile(n) {
    const slidesMobile = document.querySelectorAll('.slideMobile');
    if (n >= totalSlidesMobile || n < 0) {
        slideIndexMobile = 0; // Reset to the first slide when reaching the end
    }

    const offsetMobile = slideIndexMobile * -100;
    document.querySelector('.sliderMobile').style.transform = `translateX(${offsetMobile}%)`;
}

function prevSlideMobile() {
    slideIndexMobile -= 1;
    showSlideMobile(slideIndexMobile);
}

function nextSlideMobile() {
    slideIndexMobile += 1;
    showSlideMobile(slideIndexMobile);
}

// Auto play slides every 3 seconds for mobile
setInterval(() => {
    nextSlideMobile();
}, 4000);

// Initial slide display for mobile
showSlideMobile(slideIndexMobile);

let slideIndex = 0;
const totalSlides = document.querySelectorAll('.slide').length;

function showSlide(n) {
    const slides = document.querySelectorAll('.slide');
    if (n >= totalSlides || n < 0) {
        slideIndex = 0; // Reset to the first slide when reaching the end
    }

    const offset = slideIndex * -100;
    document.querySelector('.slider').style.transform = `translateX(${offset}%)`;
}

function prevSlide() {
    slideIndex -= 1;
    showSlide(slideIndex);
}

function nextSlide() {
    slideIndex += 1;
    showSlide(slideIndex);
}

// Auto play slides every 3 seconds for desktop
setInterval(() => {
    nextSlide();
}, 4000);

// Initial slide display for desktop
showSlide(slideIndex);

