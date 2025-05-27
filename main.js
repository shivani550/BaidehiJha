let search = document.querySelector('.search-box');
document.querySelector('#search-icon').onclick = () =>{
    search.classList.toggle('active');
    cart.classList.remove('active');
    
};
let cart = document.querySelector('.cart');
document.querySelector('#cart-icon').onclick = () =>{
    cart.classList.toggle('active');
    search.classList.remove('active');
};
let user = document.querySelector('.user');
document.querySelector('#user-icon').onclick = () =>{
    user.classList.toggle('active');
    cart.classList.remove('active');
    search.classList.remove('active');
}
var swiper = new Swiper(".new-arrival", {
    spaceBetween: 20,
    loop:true,
    centeredSlides: true,
    autoplay:{
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        0: {
            slidesPerview: 0,
        },
        568: {
            slidesPerview: 2,
        },
        768: {
            slidesPerview: 2,
        },
        1020:{
            slidesPerview: 3,
        },
    

    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEL:".swiper-button-next",
        prevEL:".swiper-button-prev",
    },
});
