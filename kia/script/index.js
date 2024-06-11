const gnb = document.querySelector('.gnb');
const navigation = document.querySelector('.navigation');
const sub = document.querySelector('.sub');
const color = document.querySelector('.gnb > li')

gnb.addEventListener('click', function () {
    navigation.style.background = '#fff'
    color.style.color = '#000'
})
let slide = new Swiper('.swiper-container',{
    direction:'horizontal',
    pagination:{
    el:'.swiper-pagination',
    loop: true,
    }
})
/* let slide1 = new Swiper1('.silder',{
    direction:'horizontal',
    navigation:{
    nextEl:'.swiper-button-next',
    prevEl:'.swiper-button-prev'
    }
}) */