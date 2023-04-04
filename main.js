let popup = document.querySelector('.popup-container');
let popupBtn = document.querySelector('.contacts-btn');
let crossBtn = document.querySelector('.cross-form');

popupBtn.onclick  = function() {
    popup.classList.remove('disp-none');
    console.log('KNOPKA');
}

crossBtn.onclick  = function() {
    popup.classList.add('disp-none');
    console.log('KNOPKA');
}