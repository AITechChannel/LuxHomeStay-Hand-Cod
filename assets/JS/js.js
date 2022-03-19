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
var video = document.querySelector('.video-popup video')

// xử lý slidbar trượt bên trái qua
navIcon.addEventListener('click', function() {
    slidebar.style.right = '0'
    overlay.style.display = 'block'
})
close.addEventListener('click', function() {
    slidebar.style.right = '-350px'
    overlay.style.display = 'none'
})
// Show media video play
overlay.onclick = function() {  
    slidebar.style.right = '-350px'
    overlay.style.display = 'none'
}
playVideo.onclick = function() {
    overlayVideo.classList.add('show');
}
overlayVideo.onclick = function() {     
    overlayVideo.classList.remove('show')
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
// Xử lý hover vào thẻ tag work
var imgWorks = document.querySelectorAll('.img-box')
var overlayImg =document.querySelectorAll('.overlay-img')
imgWorks.forEach(function(imgWork) {
    imgWork.addEventListener('mouseover', function() {
        // console.log(imgWork)
        imgWork.querySelector('.overlay-img').classList.add('visible')
    })
    
    imgWork.addEventListener('mouseout', function() {
        imgWork.querySelector('.overlay-img').classList.remove('visible')    
    })
})
//Xử lý phân nhóm từng thẻ tab mỗi nội dung riêng biệt
var tabWork = document.querySelectorAll('.tab')
tabWork.forEach(function(tab){
    tab.onclick = function(e) {
        let tagSelect = document.querySelector('.tab.select')
        tagSelect.classList.remove('select')
        this.classList.add('select')
        let workTags = document.querySelectorAll('.work-tags')
        workTags.forEach(function(tag){
            tag.classList.remove('show')
            console.log(tab)
            console.log(tag)
            if (tab.getAttribute('group') =='work' && tag.getAttribute('group') == 'work') {        
                tag.classList.add('show')
            } if (tab.getAttribute('group') =='brand' && tag.getAttribute('group') == 'brand') {        
                tag.classList.add('show')
            } if (tab.getAttribute('group') =='marketing' && tag.getAttribute('group') == 'marketing') {        
                tag.classList.add('show')
            } 

        })
    }
    
})
