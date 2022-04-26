const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
let subMenu = $('.header .sub-item')
let language = $('.header .language')

subMenu.onclick = function() {
    language.classList.toggle('visible')
}
window.onclick=function(e) {
    if(e.target.closest('.header .language') !== language && e.target.closest('.header .sub-item')  !== subMenu) {
        language.classList.remove('visible')
    }
}


const searchCustomer = $('.header .search__customer')
const subCustomer = $('.header .sub-customer')

searchCustomer.onclick = function() {
    subCustomer.classList.toggle('visible')
}



const bannerContainer = $('.banner-container')
const bannerImgs = $$('.banner-container img')

    bannerImgs[0].style.width = bannerContainer.offsetWidth + 'px'
    bannerContainer.style.height = bannerImgs[0].offsetHeight + 'px'

const imgControlDot = $$('.img-control__dot')

function slider() {
    setTimeout(() => {
        bannerImgs[0].style.left = `-${bannerImgs[0].offsetWidth}px`
        bannerImgs[1].style.left = 0
        imgControlDot[1].classList.remove('on')
        imgControlDot[0].classList.add('on')
        console.log(1)

        setTimeout(() => {
        bannerImgs[1].style.left = `${bannerImgs[1].offsetWidth}px`
        bannerImgs[0].style.left = 0
        imgControlDot[0].classList.remove('on')
        imgControlDot[1].classList.add('on')
            slider()
        },3000)
    }, 3000);
    
}
slider()

