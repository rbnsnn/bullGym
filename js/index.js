const expandAbout = document.querySelector('.about__expand')
const expandContent = document.querySelector('.about__expanded-content')
const expandSpan = document.querySelector('.expand')
const expandIcon = document.querySelector('.fa-solid')

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

const swiper = new Swiper('.swiper', {
    // Optional parameters
    slidesPerView: 3,
    spaceBetween: 30,
    zoom: true,
    loop: true,


    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
});