const ulItems = document.querySelectorAll('.header__nav__ul__item__title')
const accs = document.querySelectorAll('.header__nav__ul__item__acc')

for (let item of ulItems) {
    item.addEventListener('click', () => {

        if(!item.classList.contains('active')) {
            
            for (let item of ulItems) {
                item.classList.remove('active')
            }

            for (let acc of accs) {
                acc.style.opacity = '0'
            }
            
            item.classList.add('active')
            item.nextElementSibling.style.opacity = '1'
            
        } else if (item.classList.contains('active')) {
            item.classList.remove('active')
            item.nextElementSibling.style.opacity = '0'
        } 
    })
}



