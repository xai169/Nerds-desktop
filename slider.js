const slide1 = document.querySelector('.main-slider-wrapper .bg-phone');
const slide2 = document.querySelector('.main-slider-wrapper .bg-pc');
const slide3 = document.querySelector('.main-slider-wrapper .bg-tablet');
const switchButton1 = document.querySelector('.main-slider-wrapper .switch-btn:nth-child(1)');
const switchButton2 = document.querySelector('.main-slider-wrapper .switch-btn:nth-child(2)');
const switchButton3 = document.querySelector('.main-slider-wrapper .switch-btn:nth-child(3)');

switchButton2.addEventListener('click', function(){
    slide1.classList.add('disp-none');
    slide2.classList.remove('disp-none');
    slide3.classList.add('disp-none');
    switchButton1.classList.remove('selected-switch');
    switchButton2.classList.add('selected-switch');
    switchButton3.classList.remove('selected-switch');
    slide2.classList.add('slider-show');
});

switchButton3.addEventListener('click', function(){
    slide1.classList.add('disp-none');
    slide2.classList.add('disp-none');
    slide3.classList.remove('disp-none');
    switchButton1.classList.remove('selected-switch');
    switchButton2.classList.remove('selected-switch');
    switchButton3.classList.add('selected-switch');
    slide3.classList.add('slider-show');
});

switchButton1.addEventListener('click', function(){
    slide1.classList.remove('disp-none');
    slide2.classList.add('disp-none');
    slide3.classList.add('disp-none');
    switchButton1.classList.add('selected-switch');
    switchButton2.classList.remove('selected-switch');
    switchButton3.classList.remove('selected-switch');
    slide1.classList.add('slider-show');
});

