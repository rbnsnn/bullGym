
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
const menuBull = document.querySelector('.menu__item__logo')

window.onscroll = () => {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        backToTop.style.display = "block";

    } else {
        backToTop.style.display = "none";
    }

    menuBull.style.opacity = (100 - (document.body.scrollTop || document.documentElement.scrollTop))

}

backToTop.addEventListener('click', () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
})


const privacyLink = document.querySelector('.privacy__link')
const privacyModal = document.querySelector('.privacy__modal')
const privacyCloseButton = document.querySelector('.privacy__modal--close')

privacyLink.addEventListener('click', (e) => {
    e.preventDefault()
    privacyModal.style.visibility = 'visible'
})

privacyCloseButton.addEventListener('click', () => {
    privacyModal.style.visibility = 'hidden'
})

const statuteLink = document.querySelector('.statute__link')
const statuteModal = document.querySelector('.statute__modal')
const statuteCloseButton = document.querySelector('.statute__modal--close')

statuteLink.addEventListener('click', (e) => {
    e.preventDefault()
    statuteModal.style.visibility = 'visible'
})

statuteCloseButton.addEventListener('click', () => {
    statuteModal.style.visibility = 'hidden'
})

const formButton = document.querySelector('.header__btn')
const statuteAccept = document.querySelector('#statute-accept')
const checkboxText = document.querySelector('.header__form-text')


formButton.addEventListener('click', (e) => {
    e.preventDefault()
    if (statuteAccept.checked) {
        window.location.href = "https://secure.tpay.com/?h=b780a0d2b7dabaddab75a5b424b73bfabee16228"
    } else {
        checkboxText.classList.add('header__form--error')
        return
    }

})

statuteAccept.addEventListener('change', () => {
    if (statuteAccept.checked) {
        checkboxText.classList.remove('header__form--error')
    }
})
