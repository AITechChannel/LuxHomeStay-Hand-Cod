const recommendInner = $('.recommend-inner')
const recommendList = $('.recommend-list')
recommendInner.style.height = recommendList.offsetHeight + 'px'

const imgContainers = $$('.img-container')
const cmpStyles = window.getComputedStyle(imgContainers[0])
//Lấy style của element
const paddingImg = parseInt(cmpStyles.getPropertyValue('padding-left'))

// set width cho thẻ con khi dùng thuộc tính position absolute
imgContainers.forEach(element => {
    element.style.width = (0.2 * (recommendInner.offsetWidth + 2*paddingImg)) + 'px'
});


 
// function click trượt recommendr
const prevImg2 = $('.recommend-container .img--prev')
const nextImg2 = $('.recommend-container .img--next')

const nextrecommend = function() {
    nextImg2.removeEventListener('click', nextrecommend)
    let overRight = recommendList.offsetWidth + (recommendList.offsetLeft + paddingImg);
    console.log(overRight)
    prevImg2.classList.remove('visible')
    if( (overRight-recommendInner.offsetWidth + 2*paddingImg) > imgContainers[0].offsetWidth) {
        
        let move = recommendList.offsetLeft + paddingImg
        move += - imgContainers[0].offsetWidth
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
        move += imgContainers[0].offsetWidth
        recommendList.style.left = `${move}px`
        console.log(recommendList.offsetLeft)
    }else {
        prevImg2.classList.add('visible')
    }
    const timeOutID =setTimeout(() => {
        prevImg2.addEventListener('click', prevrecommend)
        clearTimeout(timeOutID)    
   }, 300);
}
prevImg2.addEventListener('click', prevrecommend)
