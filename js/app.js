//Mobile navigation
const body = document.getElementsByTagName('body')[0]
const navBtn = document.querySelector('.nav-toggle')
const navMenu = document.querySelector('.nav-list')
const menuBars = document.querySelector('.mobile-nav')
const navElement = navMenu.querySelectorAll('li')
console.log(navElement)


console.log(body)

navBtn.addEventListener('click', () => {
    navMenu.classList.toggle('open')
    menuBars.classList.toggle('active')

    if (navMenu.classList.contains('open')) {
        body.style.overflow = "hidden"
        navElement.classList.add('effect')
    } else {
        body.style.overflow = "scroll"
    }

    navElement.classList.add('open')
})

const removeNavMenu = () => {
    navMenu.classList.remove('open')
    menuBars.classList.remove('active')
}

navElement.forEach(navEl => {
    navEl.addEventListener('click', removeNavMenu)
})