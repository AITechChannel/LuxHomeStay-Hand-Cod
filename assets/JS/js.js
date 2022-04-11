var $ = document.querySelector.bind(document)
var $$ = document.querySelectorAll.bind(document)

let menuBtn = $('.navbar .menu-btn')
let menuBtnLine1 =$('.navbar .menu-btn .line1')
let menuBtnLine2 =$('.navbar .menu-btn .line2')
let menuBtnLine2_1 =$('.navbar .menu-btn .line2-1')
let menuBtnLine3 =$('.navbar .menu-btn .line3')
let menuList = $(".navbar ul")

menuList.style.bottom = 0

menuBtn.onclick = function() {

    if (menuList.style.bottom == "0px") {

        let menuHeight = menuList.offsetHeight;
        menuList.style.bottom = `${-menuHeight}px`
        menuBtnLine1.style.opacity = 0
        menuBtnLine3.style.opacity = 0
    
        menuBtnLine2.style.transform = 'rotate(138deg)'
        menuBtnLine2_1.style.transform = 'rotate(-138deg)'
        checkClicks()
    } else {

        menuList.style.bottom = 0
        menuBtnLine1.style.opacity = 1
        menuBtnLine3.style.opacity = 1
    
        menuBtnLine2.style.transform = 'rotate(0deg) translateY(-50%)'
        menuBtnLine2_1.style.transform = 'rotate(0deg) translateY(-50%)'
    }

}
console.log(menuList.style.bottom != "0px")
function checkClicks() {

    if (menuList.style.bottom != "0px") {
        onclick = function(e) {
            if (e.target != menuList && e.target != menuBtn) {
                menuList.style.bottom = 0
                menuBtnLine1.style.opacity = 1
                menuBtnLine3.style.opacity = 1
            
                menuBtnLine2.style.transform = 'rotate(0deg) translateY(-50%)'
                menuBtnLine2_1.style.transform = 'rotate(0deg) translateY(-50%)'
            }
        }
    }
}

let bannerLeft = $('.banner-left')
let bannerRight = $('.banner-right')

let aboutLeft = $('.about-left')
let aboutList = $$('.about-right .about-list')


window.onload = function() {
    aboutLeft.style.opacity = 1;
    var delay = 0;
    aboutList.forEach(function(item) {
        delay += 0.2;
        item.style.transitionDelay = `${delay}s`
        item.style.opacity = 1;

    })
let body = $('body')

    body.style.width = window.innerWidth;


}


window.onscroll = function() {
    let rect = bannerLeft.getBoundingClientRect()
}
console.log(window.innerWidth)

let body = $('body')
// window.onload = function() {
    body.style.width = window.innerWidth;
// }