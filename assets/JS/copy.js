const discoverInner = $('.discover-inner')
const discoverList = $('.discover-list')
discoverInner.style.height = discoverList.offsetHeight + 'px'

const imgContainers3 = $$('.discover .img-container')
const cmpStyles3 = window.getComputedStyle(imgContainers3[0])
//Lấy style của element
const paddingImg = parseInt(cmpStyles3.getPropertyValue('padding-left'))

// set width cho thẻ con khi dùng thuộc tính position absolute
imgContainers3.forEach(element => {
    element.style.width = (0.33333 * (discoverInner.offsetWidth + 2*paddingImg)) + 'px'
});


 
// --------------------function click trượt discover--------------------
const prevImg3 = $('.discover-container .img--prev')
const nextImg3 = $('.discover-container .img--next')

const nextdiscover = function() {
    nextImg3.removeEventListener('click', nextdiscover)
    let overRight = discoverList.offsetWidth + (discoverList.offsetLeft + paddingImg);
    console.log(overRight)
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
        console.log(discoverList.offsetLeft)
    }else {
        prevImg3.classList.add('visible')
    }
    const timeOutID =setTimeout(() => {
        prevImg3.addEventListener('click', prevdiscover)
        clearTimeout(timeOutID)    
   }, 300);
}
prevImg3.addEventListener('click', prevdiscover)