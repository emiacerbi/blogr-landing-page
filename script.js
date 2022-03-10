const ulItems = document.querySelectorAll('.header__nav__ul__item__title')
const accs = document.querySelectorAll('.header__nav__ul__item__acc')

const mobileUlItems = document.querySelectorAll('.mobile__nav__ul__item__title')
const mobileAccs = document.querySelectorAll('.mobile__nav__ul__item__acc')

const hamb = document.querySelector('.header__nav__hamburguer')
const mobileNav = document.querySelector('.mobile__nav')


// Wide resolution 
for (let item of ulItems) {
    item.addEventListener('click', () => {

        if(!item.classList.contains('active')) {
            
            for (let item of ulItems) {
                item.classList.remove('active')
            }

            for (let acc of accs) {
                acc.style.maxHeight = '0'
            }
            
            item.classList.add('active')
            item.nextElementSibling.style.maxHeight = item.nextElementSibling.scrollHeight + 'px'
            
        } else if (item.classList.contains('active')) {
            item.classList.remove('active')
            item.nextElementSibling.style.maxHeight = '0'
        } 
    })
}

// Small resolution
for (let item of mobileUlItems) {
    item.addEventListener('click', () => {

        if(!item.classList.contains('active')) {
            
            for (let item of mobileUlItems) {
                item.classList.remove('active')
            }

            for (let acc of mobileAccs) {
                acc.style.maxHeight = '0'
            }
            
            item.classList.add('active')
            item.nextElementSibling.style.maxHeight = item.nextElementSibling.scrollHeight + 'px'
            
        } else if (item.classList.contains('active')) {
            item.classList.remove('active')
            item.nextElementSibling.style.maxHeight = '0'
        } 
    })
}

hamb.addEventListener('click', () => {
    console.log("test")
    if (mobileNav.style.opacity === '1') {
        mobileNav.style.opacity = '0'
        mobileNav.style.top = '-50%'
    } else {
        mobileNav.style.opacity = '1'
        mobileNav.style.top = '15%'
    }
})



