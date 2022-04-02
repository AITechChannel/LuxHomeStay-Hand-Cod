var navIconOpen = document.querySelector('.nav-icon i:first-child')
var navIconClose = document.querySelector('.nav-icon i:last-child')
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

const pc = window.matchMedia("(min-width: 993px)");
pc.addListener(handleDeviceChange);
function handleDeviceChange(e) {
  if (e.matches) {
    navIconOpen.addEventListener('click', function() {
        slidebar.style.right = '0'
        overlay.style.display = 'block'
    })
    close.addEventListener('click', function() {
        slidebar.style.right = '-350px'
        overlay.style.display = 'none'
    })
} else {
    const slidbarTop = document.querySelector('.slidebar-top')
        navIconOpen.onclick = function () {
            slidbarTop.style.top = '70px';
            navIconOpen.style.display ='none'
            navIconClose.style.display = 'block'
        }
        navIconClose.onclick = function () {
            slidbarTop.style.top = '-320px'
            navIconClose.style.display = 'none'
            navIconOpen.style.display = 'block'
            
        }
    }
}
handleDeviceChange(pc)


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


//---------------Auto slider------------------

var sliderItem = document.querySelectorAll('.testimonial')
var slidebox = document.querySelector('.testimonials-box')
var sliderItemWidth = sliderItem[0].offsetWidth;
var sliderLength = sliderItem.length;

var tnsBtn = document.querySelectorAll('.tns-nav .btn')

setInterval (autoSlide, 2000)
var i = 1;
function autoSlide() {

    for (var a = 0; a < tnsBtn.length; a++) {
            tnsBtn[a].classList.remove('active')
            tnsBtn[i].classList.add('active')
    }

    if (i == 0) {
        sliderItem[1].style = "left:595px;z-index:3";
        
        sliderItem[sliderLength - 1].style = "left:-595px;z-index:-2";
    
        sliderItem[0].style = "left:0;z-index:3";

        sliderItem[sliderLength - 2].style = "left: 1190px;z-index:-2";

        i++;

      } else if (i == 1) {
          
        sliderItem[0].style = "left:-595px;z-index:-2";
        
        sliderItem[1].style = "left:0;z-index:3";
        
        sliderItem[2].style = "left:595px;z-index:3";

        sliderItem[3].style = "left: 1190px;z-index:-2";

        sliderItem[sliderLength-1].style = "left: 1190px;z-index:-2";


        i++;

      } 
      else if (i >= 2 && i < sliderLength - 1) {
          
        sliderItem[i - 2].style = "left: 1190px;z-index:-2";

        sliderItem[i - 1].style = "left:-595px;z-index:-2";
        
        sliderItem[i].style = "left: 0;z-index:3";
        
        sliderItem[i + 1].style = "left:595px;z-index:3";
 
        i++;

      }
       else if (i === sliderLength -1) {
           
        sliderItem[0].style = "left: 595px;z-index:3";
                
        sliderItem[i - 1].style = "left:-595px;z-index:-2";
        
        sliderItem[i].style = "left:0;z-index:3";
        
        sliderItem[i - 2].style = "left: 1190px;z-index:-2";

        i = 0;
    
      }
}


// -------------height box parent position: relative

var testimonialBox = document.querySelector('.testimonials-box')
function boxHeight() {
    const slideItemHeight = sliderItem[0].offsetHeight;
    testimonialBox.style.height = `${slideItemHeight}px`
}
boxHeight()


// --------------google map API --------------------

function initMap() {
    const bachkhoa = { lat: 16.07238682707813, lng: 108.15357676086444 }; 
    const map = new google.maps.Map(document.getElementById("map"), 
    {
      zoom: 18,
      center: bachkhoa,
    });
    const marker = new google.maps.Marker({
      position: bachkhoa,
      map: map,
    });
}
