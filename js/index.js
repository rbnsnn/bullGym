const expandAbout = document.querySelector('.about__expand')
const expandContent = document.querySelector('.about__expanded-content')

expandAbout.addEventListener('toggle', () => {
    expandContent.classList.toggle()
})