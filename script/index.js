const slide  = new Swiper('.first',{
    initialSlide: 0,
    direction:'horizontal',
    loop: true,
    pagination:{
        el:'main .swiper-pagination',
        type: 'bullets',
        spaceBetween: 20,
    }
})
document.addEventListener('DOMContentLoaded', function () {
    const slides = document.querySelectorAll('.swiper-slide .title_text');
    slides.forEach(function (slide) {
        slide.style.animation = 'slide-left 1s both';
    });
})
const content = new Swiper('.second', {
    slidesPerView : 3,
    spaceBetween : 24,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        360: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 40,
        },
        1200: {
            slidesPerView: 3,
            spaceBetween: 50,
            
        },
    },
})
gsap.to('.sub_news ',{
    scrollTrigger:'.sub_news',
    duration: 1.5,//1초
    delay:0.5,
    x:0, y:-100,
})
const sub = document.querySelectorAll('.sub_buy')
const sub1 = document.querySelectorAll('.sub_experience')
const sub2 = document.querySelectorAll('.sub_event1')
const sub3 = document.querySelectorAll('.sub_support')
const sub4 = document.querySelectorAll('.sub_discover_kia')
const body = document.querySelector('main')
const navigation = document.querySelector('navigation')

sub[0].style.display = 'none'; 
sub1[0].style.display = 'none'; 
sub2[0].style.display = 'none'; 
sub3[0].style.display = 'none';  
sub4[0].style.display = 'none';
body.style.background = '#fff';  
const menu = document.querySelectorAll('.gnb > li')
console.log(menu)
menu[1].addEventListener('mouseover',function(){
    sub[0].style.display = 'block';
    body.style.filter = 'brightness(10%)';
    navigation.style.filter = 'invert(100%)';
})
menu[1].addEventListener('mouseout',function(){
    sub[0].style.display = 'none';
    body.style.filter = 'brightness(100%)';
})
menu[2].addEventListener('mouseover',function(){
    sub1[0].style.display = 'block';
    body.style.filter = 'brightness(10%)';
})
menu[2].addEventListener('mouseout',function(){
    sub1[0].style.display = 'none';
    body.style.filter = 'brightness(100%)';
})
menu[3].addEventListener('mouseover',function(){
    sub2[0].style.display = 'block';
    body.style.filter = 'brightness(10%)';
})
menu[3].addEventListener('mouseout',function(){
    sub2[0].style.display = 'none';
    body.style.filter = 'brightness(100%)';
})
menu[4].addEventListener('mouseover',function(){
    sub3[0].style.display = 'block';
    body.style.filter = 'brightness(10%)';
})
menu[4].addEventListener('mouseout',function(){
    sub3[0].style.display = 'none';
    body.style.filter = 'brightness(100%)';
})
menu[5].addEventListener('mouseover',function(){
    sub4[0].style.display = 'block';
    body.style.filter = 'brightness(10%)';
})
menu[5].addEventListener('mouseout',function(){
    sub4[0].style.display = 'none';
    body.style.filter = 'brightness(100%)';
})

const vehicle = document.querySelector('.vehicle1')
const vehicle2 = document.querySelector('.vehicle2')
const vehicle3 = document.querySelector('.vehicle3')
const vehicle4 = document.querySelector('.vehicle4')
const vehicle5 = document.querySelector('.vehicle5')
const vehicle6 = document.querySelector('.vehicle6')
const vehicle7 = document.querySelector('.vehicle7')
const vehicle8 = document.querySelector('.vehicle8')
const vehicle9 = document.querySelector('.vehicle9')
const vehicle10 = document.querySelector('.vehicle10')
const btn = document.querySelectorAll('.btn')
vehicle.addEventListener('mouseover',function(){
    btn[0].style.display = 'block'
})
vehicle.addEventListener('mouseout',function(){
    btn[0].style.display = 'none'
})
vehicle2.addEventListener('mouseover',function(){
    btn[1].style.display = 'block'
})
vehicle2.addEventListener('mouseout',function(){
    btn[1].style.display = 'none'
})
vehicle3.addEventListener('mouseover',function(){
    btn[2].style.display = 'block'
})
vehicle3.addEventListener('mouseout',function(){
    btn[2].style.display = 'none'
})
vehicle4.addEventListener('mouseover',function(){
    btn[3].style.display = 'block'
})
vehicle4.addEventListener('mouseout',function(){
    btn[3].style.display = 'none'
})
vehicle5.addEventListener('mouseover',function(){
    btn[4].style.display = 'block'
})
vehicle5.addEventListener('mouseout',function(){
    btn[4].style.display = 'none'
})
vehicle6.addEventListener('mouseover',function(){
    btn[5].style.display = 'block'
})
vehicle6.addEventListener('mouseout',function(){
    btn[5].style.display = 'none'
})
vehicle7.addEventListener('mouseover',function(){
    btn[6].style.display = 'block'
})
vehicle7.addEventListener('mouseout',function(){
    btn[6].style.display = 'none'
})
vehicle8.addEventListener('mouseover',function(){
    btn[7].style.display = 'block'
})
vehicle8.addEventListener('mouseout',function(){
    btn[7].style.display = 'none'
})
vehicle9.addEventListener('mouseover',function(){
    btn[8].style.display = 'block'
})
vehicle9.addEventListener('mouseout',function(){
    btn[8].style.display = 'none'
})
vehicle10.addEventListener('mouseover',function(){
    btn[9].style.display = 'block'
})
vehicle10.addEventListener('mouseout',function(){
    btn[9].style.display = 'none'
})