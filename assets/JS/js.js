var navIcon = document.querySelector('.nav-icon')
var slidebar = document.querySelector('.slidebar-left')
var close = document.querySelector('.slidebar-close i')
var overlay = document.querySelector('.overlay-slidebar')
var navBtns = document.querySelectorAll('.navBtn')
var navBtnOffs = document.querySelectorAll('.navBtn.btn-off')
var navBtnOn = document.querySelector('.navBtn.btn-on')
var aboutTexts = document.querySelectorAll('.about-text')
var aboutTextVis = document.querySelector('.about-text.active')
var overlayVideo = document.querySelector('.overlay-modal')
var playVideo = document.querySelector('.play-icon')
// xử lý slidbar trượt bên trái qua
navIcon.addEventListener('click', function() {
    slidebar.style.right = '0'
    overlay.style.display = 'block'
})
close.addEventListener('click', function() {
    slidebar.style.right = '-350px'
    overlay.style.display = 'none'
})
// overlay.addEventListener('click', function() {
//     slidebar.style.right = '-350px'
//     overlay.style.display = 'none'
// })
overlay.onclick = function() {
    slidebar.style.right = '-350px'
    overlay.style.display = 'none'
}
playVideo.onclick = function() {
    overlayVideo.style.display = 'block'
}
overlayVideo.onclick = function() {
    overlayVideo.style.display = 'none'
}
//xử lý nút nhấn chuyển trang ok
navBtns.forEach(function(navBtn, index) {
    navBtn.onclick = function() {
        aboutText = aboutTexts[index]
        console.log(aboutText)
        var navBtnOn = document.querySelector('.navBtn.active')
        navBtnOn.classList.remove('active')
        this.classList.add('active')
        var aboutTextVis = document.querySelector('.about-text.active')
        aboutTextVis.classList.remove('active')
        aboutText.classList.add('active')
    }
})