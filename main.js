const popup = document.querySelector('.popup-container');
const popupBtn = document.querySelector('.contacts-btn');
const crossBtn = popup.querySelector('.cross-form');
const firstName = popup.querySelector('[name=name]');
const email = popup.querySelector('[name=email]');
const offer = popup.querySelector('[name=offer]');
const form = popup.querySelector('form');
const nameStorage = localStorage.getItem('name', firstName.value);
const emailStorage = localStorage.getItem('email', email.value);

popupBtn.addEventListener('click', function() {
    popup.classList.remove('disp-none');
    firstName.focus();
    if (nameStorage && emailStorage) {
        firstName.value = nameStorage;
        email.value = emailStorage;
        offer.focus();
    }
});

crossBtn.addEventListener('click', function() {
    popup.classList.add('disp-none');
});

document.addEventListener('keydown', function(evt) {
    if (evt.key === 'Escape') {
        popup.classList.add('disp-none'); 
    }
});

form.addEventListener('submit', function(evt) {
    if (!firstName.value || !email.value || !offer.value) {
    evt.preventDefault();
    } else {
        localStorage.setItem('name', firstName.value);
        localStorage.setItem('email', email.value);
    }
});
