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
    console.log(menuList.style.bottom)
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
    
        menuBtnLine2.style.transform = 'rotate(0deg)'
        menuBtnLine2_1.style.transform = 'rotate(0deg)'
    }

}
function checkClicks() {

    if (menuList.style.bottom != "0px") {
        onclick = function(e) {
            if (e.target != menuList && e.target.prototype.closet != menuBtn) {
                menuList.style.bottom = 0
                menuBtnLine1.style.opacity = 1
                menuBtnLine3.style.opacity = 1
            
                menuBtnLine2.style.transform = 'rotate(0deg)'
                menuBtnLine2_1.style.transform = 'rotate(0deg)'
            }
        }
    }
}

let bannerLeft = $('.banner-left')
let bannerRight = $('.banner-right')




window.onload = function() {
    animation()
    statusNavbar()
}
window.onscroll = function() {
    bounceInUps()

    animation()
    statusNavbar()
    
}
let windowHeight = window.innerHeight

function animation() {

    opacityOnly()
    fadeInLeft('banner-left')
    fadeInRight('banner-right')
    fadeInLeft('services-left')
    fadeInRight('services-right')
    fadeInLeft('message-left')
    fadeInRight('message-right')
    fadeInLeft('blog-left-bottom')
    fadeInRight('blog-right-bottom')
    bounceInUp('blog-right-top')
    bounceInUp('blog-left-top')
    bounceInUp('porfolio-title')
    // bounceInUps()
}

function opacityOnly() {
    let aboutLeft = $('.about-left')
    let aboutList = $$('.about-right .about-list')
    let about = $('.about')
    let rectAbout = about.getBoundingClientRect()
    if(!(rectAbout.top > windowHeight || rectAbout.bottom <0)) {
        aboutLeft.style.opacity = 1;
        var delay = 0;
        aboutList.forEach(function(item) {
        delay += 0.5;
        item.style.transitionDelay = `${delay}s`
        item.style.opacity = 1;
    })
    }
}

function fadeInLeft(x, y ='0s') {
    let elementLeft = $(`.${x}`)
    let rectElementLeft = elementLeft.getBoundingClientRect()
    let growHeight = windowHeight - 1/2*rectElementLeft.height
    if (!(rectElementLeft.top > growHeight || rectElementLeft.bottom <0)) {
        elementLeft.classList.remove('opacity0')
        elementLeft.style.animation = `fadeInLeft 0.8s ease-in-out ${y}`
    }
}

function fadeInRight(x, y ='0s') {
    let elementRight = $(`.${x}`)
    let rectElementRight = elementRight.getBoundingClientRect()
    let growHeight = windowHeight - 1/2*rectElementRight.height
    if (!(rectElementRight.top > growHeight || rectElementRight.bottom <0)) {
        elementRight.classList.remove('opacity0')
        elementRight.style.animation = `fadeInRight 0.8s ease-in-out ${y}`
    }
}


function bounceInUp(x, y ='0s') {
    let element = $(`.${x}`)
    let rectElement = element.getBoundingClientRect()
    let growHeight = windowHeight - 1/2*rectElement.height
    if (!(rectElement.top > growHeight || rectElement.bottom <0)) {
        element.style.animation = `bounceInUp 0.5s ease-in-out ${y}`
    }
}

function bounceInUps() {
    
    let porItem = $$('.por-item')
    var delay = 0;
    porItem.forEach(function(item) {
        let rectItem= item.getBoundingClientRect()
        if(!(rectItem.top > windowHeight || rectItem.bottom <0)) {
            item.style.animation = `bounceInUp 0.5s ease-in-out ${delay}s`
            delay += 0.3;

    }
    })
}

// function statusNabar() {

//     menu = [  {
//         about: 'about',
//         className: 'home'
//     },{
//         about: 'about',
//         className: 'about'
//     }, {
//         about: 'about',
//         className: 'services'
//     },{
//         about: 'about',
//         className: 'portfolio'
//     },{
//         about: 'about',
//         className: 'blog'
//     },{
//         about: 'about',
//         className: 'message'
//     }
// ]
    
// menu.forEach(function(item) {
//     let page =item.className
//     let cutPage = page.slice(0, 4)
//     let elementPage = $(`#${page}`)
//     let rectElementPage = elementPage.getBoundingClientRect()
//     let growHeight = windowHeight
//     if (!(rectElementPage.top > growHeight || rectElementPage.bottom <0)) {
//         elementPage.classList.add('active')
//         let itemMenu = $$('.navbar ul li a')
//         itemMenu.forEach(function(item) {
//                 var textItem = item.innerText.toLowerCase()
//                 item.classList.remove('active')
//                 if(textItem.includes(`${cutPage}`)) {
//                     item.classList.add('active')
//                 }
//             })
//     }
// })
// }
function statusNavbar() {
    let pages = $$('.page')
    pages.forEach(function(page) {
        let rectPage = page.getBoundingClientRect()
        let growHeight = window.innerHeight- 1/2*rectPage.height
        if (!(rectPage.top > growHeight || rectPage.bottom <0)) {
            let menuItems = $$('.navbar ul li a')
            menuItems.forEach(function(menuItem) {
                menuItem.classList.remove('active')
                let nameId = page.getAttribute('id')
                let menuItemHre = menuItem.getAttribute('href')

                if(menuItemHre.includes(nameId)) {
                    menuItem.classList.add('active')
                }
            })
        }
    })
}