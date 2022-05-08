const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

// ------------language dropdown --------------------

const subMenu = $('.header .sub-item')
const language = $('.header .language')

subMenu.onclick = function() {
    language.classList.toggle('visible')
}
window.onclick=function(e) {
    if(e.target.closest('.header .language') !== language && e.target.closest('.header .sub-item')  !== subMenu) {
        language.classList.remove('visible')
    }
}

// ---------------search dropdown ---------------

const searchCustomer = $('.header .search__customer')
const subCustomer = $('.header .sub-customer')

searchCustomer.onclick = function() {
    subCustomer.classList.toggle('visible')
}

const callback = function() {

    // ----------------auto slide banner-------------------------
    const bannerContainer = $('.banner-container')
    const bannerImgs = $$('.banner-container img')
    const imgControlDot = $$('.img-control__dot')
    
    bannerImgs[0].style.width = bannerContainer.offsetWidth + 'px'
    bannerContainer.style.height = bannerImgs[0].offsetHeight + 'px'
    
    function autoFwdSlider() {
        let i =0;
    
        bannerImgs.forEach((img) => {
            img.style.left = `${img.offsetWidth}px`
    
        })
    
        bannerImgs[i].style.left = 0;
        const id = setInterval(() => {                 
            i+=1;       
            if(i > 2) {
                autoRevSlider()
                clearInterval(id)
            }
            bannerImgs[i].style.left = 0;
            imgControlDot[i].classList.add('on')
            imgControlDot[i-1].classList.remove('on')
    
            bannerImgs[i-1].style.left = '-1304px'
        }, 2000);
       
    }
    autoFwdSlider()
    
    function autoRevSlider() {
        let i = bannerImgs.length;
    
        const id2 = setInterval(() => {                 
            i= i-1;
            
            bannerImgs[i].style.left = '1304px';
    
            bannerImgs[i-1].style.left = 0;
    
            imgControlDot[i].classList.remove('on')
            imgControlDot[i-1].classList.add('on')
            if(i < 2) {
                autoFwdSlider()
                clearInterval(id2)
            }
        }, 2000);
        
    }
    
    
    // function slideVisible() {
    //     bannerImgs[1].style.left = `${bannerImgs[1].offsetWidth}px`
    //     bannerImgs[0].style.left = 0
    //     imgControlDot[0].classList.remove('on')
    //     imgControlDot[1].classList.add('on')
    //     set()
    // }
    // // function autoSlider() {
    // //     // setTimeout(() => {
    // //         bannerImgs[0].style.left = `-${bannerImgs[0].offsetWidth}px`
    // //         bannerImgs[1].style.left = 0
    // //         imgControlDot[1].classList.remove('on')
    // //         imgControlDot[0].classList.add('on')
    
    // //     // }, 3000);  
    // // }
    // // autoSlider()
    
    
    // ------------------carousel-----------------
    
    // --------------------function click trượt popular--------------------
    
    const popularInner = $('.popular-inner')
    const popularRect = popularInner.getBoundingClientRect()
    console.log(popularRect)
    const popularList = $('.popular-list')
    popularInner.style.height = popularList.offsetHeight + 'px'
    
    const imgContainers1 = $$('.popular .img-container')
    const cmpStyles1 = window.getComputedStyle(imgContainers1[0])
    //Lấy style của element
    const paddingImg = parseInt(cmpStyles1.getPropertyValue('padding-left'))
    
    // set width cho thẻ con khi dùng thuộc tính position absolute
    
    
    const tabletMediaQuery = window.matchMedia('(max-width: 992px)')
    
    function hanleTablet1(e) {
        if(e.matches) {
            console.log('match')
            imgContainers1.forEach(element => {
                element.style.width = (0.5 * (popularInner.offsetWidth + 2*paddingImg)) + 'px'
            });
        } else {
            imgContainers1.forEach(element => {
                element.style.width = (0.2 * (popularInner.offsetWidth + 2*paddingImg)) + 'px'
            });
        }
    }

    tabletMediaQuery.addListener(hanleTablet1)
    hanleTablet1(tabletMediaQuery)
     
    const prevImg1 = $('.popular-container .img--prev')
    const nextImg1 = $('.popular-container .img--next')
    
    const nextpopular = function() {
        nextImg1.removeEventListener('click', nextpopular)
        let overRight = popularList.offsetWidth + (popularList.offsetLeft + paddingImg);
        prevImg1.classList.remove('visible')
        if( (overRight-popularInner.offsetWidth + 2*paddingImg) > imgContainers1[0].offsetWidth) {
            
            let move = popularList.offsetLeft + paddingImg
            move += - imgContainers1[0].offsetWidth
            popularList.style.left = `${move}px`
    
        } else {
            nextImg1.classList.add('visible')
        }
        const timeOutID =setTimeout(() => {
             nextImg1.addEventListener('click', nextpopular)
             clearTimeout(timeOutID)    
        }, 300);
    
    }
    nextImg1.addEventListener('click', nextpopular)
    
    const prevpopular = function() {
        prevImg1.removeEventListener('click', prevpopular)
        nextImg1.classList.remove('visible')
        if((popularList.offsetLeft + paddingImg) <0 ) {
            let move = popularList.offsetLeft + paddingImg
            move += imgContainers1[0].offsetWidth
            popularList.style.left = `${move}px`
        }else {
            prevImg1.classList.add('visible')
        }
        const timeOutID =setTimeout(() => {
            prevImg1.addEventListener('click', prevpopular)
            clearTimeout(timeOutID)    
       }, 300);
    }
    prevImg1.addEventListener('click', prevpopular)
    
    
    //------------------function click trượt recommend--------------------
    
    const recommendInner = $('.recommend-inner')
    const recommendList = $('.recommend-list')
    recommendInner.style.height = recommendList.offsetHeight + 'px'
    
    const imgContainers2 = $$('.recommend-list .img-container')
    const cmpStyles2 = window.getComputedStyle(imgContainers2[0])
    //Lấy style của element
    // const paddingImg2 = parseInt(cmpStyles2.getPropertyValue('padding-left'))
    
    // set width cho thẻ con khi dùng thuộc tính position absolute
    
    
    
    function hanleTablet2(e) {
        if(e.matches) {
            imgContainers2.forEach(element => {
                element.style.width = (0.5 * (recommendInner.offsetWidth + 2*paddingImg)) + 'px'
            });
        } else {
            imgContainers2.forEach(element => {
                element.style.width = (0.25 * (recommendInner.offsetWidth + 2*paddingImg)) + 'px'
            });
        }
    }

    tabletMediaQuery.addListener(hanleTablet2)
    hanleTablet2(tabletMediaQuery)


    const prevImg2 = $('.recommend-container .img--prev')
    const nextImg2 = $('.recommend-container .img--next')
    
    const nextrecommend = function() {
        nextImg2.removeEventListener('click', nextrecommend)
        let overRight = recommendList.offsetWidth + (recommendList.offsetLeft + paddingImg);
        prevImg2.classList.remove('visible')
        if( (overRight-recommendInner.offsetWidth + 2*paddingImg) > imgContainers2[0].offsetWidth) {
            
            let move = recommendList.offsetLeft + paddingImg
            move += - imgContainers2[0].offsetWidth
            recommendList.style.left = `${move}px`
    
        } else {
            nextImg2.classList.add('visible')
        }
        const timeOutID =setTimeout(() => {
             nextImg2.addEventListener('click', nextrecommend)
             clearTimeout(timeOutID)    
        }, 300);
    
    }
    nextImg2.addEventListener('click', nextrecommend)
    
    const prevrecommend = function() {
        prevImg2.removeEventListener('click', prevrecommend)
        nextImg2.classList.remove('visible')
        if((recommendList.offsetLeft + paddingImg) <0 ) {
            let move = recommendList.offsetLeft + paddingImg
            move += imgContainers2[0].offsetWidth
            recommendList.style.left = `${move}px`
        }else {
            prevImg2.classList.add('visible')
        }
        const timeOutID =setTimeout(() => {
            prevImg2.addEventListener('click', prevrecommend)
            clearTimeout(timeOutID)    
       }, 300);
    }
    prevImg2.addEventListener('click', prevrecommend)
    
    
    
    
    
    
    // --------------------function click trượt discover--------------------
    
    const discoverInner = $('.discover-inner')
    const discoverList = $('.discover-list')
    discoverInner.style.height = discoverList.offsetHeight + 'px'
    console.log(discoverList.offsetHeight)
    
    const imgContainers3 = $$('.discover .img-container')
    const cmpStyles3 = window.getComputedStyle(imgContainers3[0])
    //Lấy style của element
    // const paddingImg = parseInt(cmpStyles3.getPropertyValue('padding-left'))
    
    // set width cho thẻ con khi dùng thuộc tính position absolute
    
    function hanleTablet3(e) {
        if(e.matches) {
            imgContainers3.forEach(element => {
                element.style.width = (0.5 * (discoverInner.offsetWidth + 2*paddingImg)) + 'px'
            });            
        } else {
            imgContainers3.forEach(element => {
                element.style.width = (0.33333 * (discoverInner.offsetWidth + 2*paddingImg)) + 'px'
            });
        }
    }

    tabletMediaQuery.addListener(hanleTablet3)
    hanleTablet3(tabletMediaQuery)
     
    const prevImg3 = $('.discover-container .img--prev')
    const nextImg3 = $('.discover-container .img--next')
    
    const nextdiscover = function() {
        nextImg3.removeEventListener('click', nextdiscover)
        let overRight = discoverList.offsetWidth + (discoverList.offsetLeft + paddingImg);
        prevImg3.classList.remove('visible')
        if( (overRight-discoverInner.offsetWidth + 2*paddingImg) > imgContainers3[0].offsetWidth) {
            
            let move = discoverList.offsetLeft + paddingImg
            move += - imgContainers3[0].offsetWidth
            discoverList.style.left = `${move}px`
    
        } else {
            nextImg3.classList.add('visible')
        }
        const timeOutID =setTimeout(() => {
             nextImg3.addEventListener('click', nextdiscover)
             clearTimeout(timeOutID)    
        }, 300);
    
    }
    nextImg3.addEventListener('click', nextdiscover)
    
    const prevdiscover = function() {
        prevImg3.removeEventListener('click', prevdiscover)
        nextImg3.classList.remove('visible')
        if((discoverList.offsetLeft + paddingImg) <0 ) {
            let move = discoverList.offsetLeft + paddingImg
            move += imgContainers3[0].offsetWidth
            discoverList.style.left = `${move}px`
        }else {
            prevImg3.classList.add('visible')
        }
        const timeOutID =setTimeout(() => {
            prevImg3.addEventListener('click', prevdiscover)
            clearTimeout(timeOutID)    
       }, 300);
    }
    prevImg3.addEventListener('click', prevdiscover)
}

window.addEventListener('resize', callback)
window.onload = callback
