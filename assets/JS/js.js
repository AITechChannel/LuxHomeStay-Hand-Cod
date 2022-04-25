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
    
        menuBtnLine2.style.transform = 'rotate(0deg)'
        menuBtnLine2_1.style.transform = 'rotate(0deg)'
    }

}
function checkClicks() {

    if (menuList.style.bottom != "0px") {
        onclick = function(e) {
            if (e.target != menuList && e.target.closest('.menu-btn') != menuBtn) {
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

// Validator
let formElement = $('form')
formElement.onsubmit = function(e) {
    let nameElement = $('#name')
    let surnameElement = $('#surname')
    let emailElement = $('#email')
    e.preventDefault()


    checkEmpty([nameElement, surnameElement, emailElement], 'Vui lòng nhập trường này')
    checkEmail(emailElement, 'Vui lòng nhập email của bạn', 'Ồ, trường này phải là email')
    checkLength([nameElement, surnameElement], 3, 9)


    function checkOnInput(inputArray) {
        inputArray.forEach(input => {
            input.addEventListener('focusin', function() {
                let messageErrorElement = input.parentElement.lastElementChild
                        messageErrorElement.innerText = ''
                        input.classList.remove('error')               
            })
            input.addEventListener('focusout', function() {
                checkEmpty([nameElement, surnameElement, emailElement], 'Vui lòng nhập trường này')
                checkEmail(emailElement, 'Vui lòng nhập email của bạn', 'Ồ, trường này phải là email')
                checkLength([nameElement, surnameElement], 3, 9)              
            })
        })
    }
    checkOnInput([nameElement, surnameElement, emailElement])
}

function checkEmpty(inputArray, messageError) {
    inputArray.forEach(input => {
        let messageErrorElement = input.parentElement.lastElementChild
        if(input.value.trim()== '') {
            messageErrorElement.innerText = `${messageError}`
            input.classList.add('error');

        } else {
            messageErrorElement.innerText = ''
            input.classList.remove('error')

        }
    })

}

function checkEmail(inputEmail, errorEmpty, errorEmail) {
    const regexEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    let messageErrorElement = inputEmail.parentElement.lastElementChild
    console.log(inputEmail.value)
    if(regexEmail.test(inputEmail.value)) {
        messageErrorElement.innerText = ''
    } else {
        if(inputEmail.value =='') {
            messageErrorElement.innerText = `${errorEmpty}`

        } else {
            messageErrorElement.innerText = `${errorEmail}`

        }
    }

}

function checkLength(inputArray, min, max) {
    inputArray.forEach(input => {
        let messageErrorElement = input.parentElement.lastElementChild
        if(input.value !== '') {
            console.log(2)
            if(input.value.trim().length < min) {
                messageErrorElement.innerText = `Trườn nay phải lớn hơn ${min} ký tự`
            } else if (input.value.trim().length > max) {
                messageErrorElement.innerText = `Trườn này phải nhỏ hơn ${max} ký tự`
            }
        }
    })
}