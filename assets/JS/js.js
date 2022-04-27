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
// console.log(bannerContainer.offsetWidth)
const bannerImgs = $$('.banner-container img')

    bannerImgs[0].style.width = bannerContainer.offsetWidth + 'px'
    bannerContainer.style.height = bannerImgs[0].offsetHeight + 'px'

const imgControlDot = $$('.img-control__dot')

// function slider() {
//     setTimeout(() => {
//         bannerImgs[0].style.left = `-${bannerImgs[0].offsetWidth}px`
//         bannerImgs[1].style.left = 0
//         imgControlDot[1].classList.remove('on')
//         imgControlDot[0].classList.add('on')
//         console.log(1)

//         setTimeout(() => {
//         bannerImgs[1].style.left = `${bannerImgs[1].offsetWidth}px`
//         bannerImgs[0].style.left = 0
//         imgControlDot[0].classList.remove('on')
//         imgControlDot[1].classList.add('on')
//             slider()
//         },3000)
//     }, 3000);
    
// }
// slider()


// ------------------carousel-----------------
const popularContainer = $('.popular-container')
const popularList = $('.popular-list')
popularContainer.style.height = popularList.offsetHeight + 'px'

const imgContainers = $$('.img-container')
const cmpStyles = window.getComputedStyle(imgContainers[0])
//Lấy style của element
const paddingImg = parseInt(cmpStyles.getPropertyValue('padding-left'))

// set width cho thẻ con khi dùng thuộc tính position absolute
imgContainers.forEach(element => {
    element.style.width = (0.2 * (popularContainer.offsetWidth + 2*paddingImg)) + 'px'
});

popularList.addEventListener('mousedown', function (e) {
    // popularList.style.left = `${e.offsetX}px`
})

 
// function click trượt slider
const prevImg = $('.img--prev')
const nextImg = $('.img--next')




nextImg.onclick = function() {
    let overRight = popularList.offsetWidth + (popularList.offsetLeft + paddingImg);
    console.log(overRight)
    if( (overRight-popularContainer.offsetWidth + 2*paddingImg) > imgContainers[0].offsetWidth) {
        
        let move = popularList.offsetLeft + paddingImg
        move += - imgContainers[0].offsetWidth
        popularList.style.left = `${move}px`

    }

}

prevImg.onclick = function() {
    if((popularList.offsetLeft + paddingImg) <0 ) {
        let move = popularList.offsetLeft + paddingImg
        move += imgContainers[0].offsetWidth
        popularList.style.left = `${move}px`
        console.log(popularList.offsetLeft)
    }
}

