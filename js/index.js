
const preloader = document.querySelector('.preloader')
window.addEventListener('load', () => {
    preloader.classList = 'preloader loaded'
})


const expandAbout = document.querySelector('.about__expand')
const expandContent = document.querySelector('.about__expanded-content')
const expandSpan = document.querySelector('.expand')
const expandIcon = document.querySelector('.expand-arrow')

const menuToggle = document.querySelector('#menu__toggle')
const menuItems = document.querySelectorAll('.menu__item')

expandAbout.addEventListener('click', () => {
    expandContent.classList.toggle('about__expanded-content--visible')
    if (expandSpan.innerHTML === 'ROZWIŃ') {
        expandSpan.innerHTML = 'ZWIŃ'
        expandIcon.classList = 'fa-solid fa-angles-up'
    } else {
        expandSpan.innerHTML = "ROZWIŃ"
        expandIcon.classList = 'fa-solid fa-angles-down'
    }
})

menuItems.forEach(element => {
    element.addEventListener('click', () => {
        menuToggle.checked = false
    })
})

// Carousel

const swiper = new Swiper(".swiper-container", {
    spaceBetween: 1,
    slidesPerView: 1,
    centeredSlides: true,
    roundLengths: true,
    loop: true,
    speed: 700,
    loopAdditionalSlides: 30,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },
    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 2,
            spaceBetween: 50,
        },
    },
});

const backToTop = document.querySelector('.header__back-to-top')

window.onscroll = () => {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        backToTop.style.display = "block";
    } else {
        backToTop.style.display = "none";
    }
}

backToTop.addEventListener('click', () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
})