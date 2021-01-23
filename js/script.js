const navBtn = document.querySelector('.navigation__button');

navBtn.addEventListener('click', function () {
    navBtn.classList.toggle('active');

})

const heroBtn = document.querySelector('.hero__button');
const heroHeader = document.querySelector('.hero__header');

const heroImg = document.querySelector('.hero__img');

heroBtn.addEventListener('click', function () {
    heroBtn.classList.toggle('active');
    heroHeader.classList.toggle('active');
    heroImg.classList.toggle('active');
})

let slideIndex = 1;
showSlides()
let autoInterval = setInterval(autoSlide, 4000);



function autoSlide() {
    showSlides(slideIndex++)
}

function plusSlides(x) {
    clearInterval(autoInterval);
    showSlides(slideIndex += x);
    autoInterval = setInterval(autoSlide, 4000);
}

function currentSlide(x) {
    showSlides(slideIndex = x);
}


document.querySelector('.dot:nth-child(1)').addEventListener('click', function () {
    currentSlide(1)
});
document.querySelector('.dot:nth-child(2)').addEventListener('click', function () {
    currentSlide(2)
});
document.querySelector('.dot:nth-child(3)').addEventListener('click', function () {
    currentSlide(3)
});
document.querySelector('.dot:nth-child(4)').addEventListener('click', function () {
    currentSlide(4)
});

function showSlides(x) {
    let i = 0;
    const sliderImg = document.querySelectorAll(`.slider__img-container`);
    const dots = document.querySelectorAll(`.dot`);
    if (slideIndex > sliderImg.length) {
        slideIndex = 1;
    }
    if (x < 1) {
        slideIndex = sliderImg.length
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(' active', '');
    }
    for (i = 0; i < sliderImg.length; i++) {
        sliderImg[i].style.display = "none";
    }
    sliderImg[slideIndex - 1].style.display = 'block';
    dots[slideIndex - 1].className += ' active';

}
const prevButton = document.querySelector('.slider__prev');
const nextButton = document.querySelector('.slider__next');

prevButton.addEventListener('click', function () {
    plusSlides(-1);
});
nextButton.addEventListener('click', function () {
    plusSlides(1);
});