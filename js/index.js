
//модальное окно обратной связи 
var popupFeedBack = document.querySelector('.js-popup-feedback');
var popupFeedBackOpen = document.querySelector('.js-button-main-contacts');
var popupFeedBackClose = document.querySelector('.js-close-popup-feedback');

popupFeedBackOpen.addEventListener('click', function (evt) {
    evt.preventDefault();
    popupFeedBack.classList.add('popup-show');
})

popupFeedBackClose.addEventListener('click', function (evt) {
    evt.preventDefault();
    popupFeedBack.classList.remove('popup-show');
})
// большая карта

var smallMap = document.querySelector('.js-min-map');
var fullMap = document.querySelector('.js-full-map');
var fullMapClose = document.querySelector('.js-close-map');

smallMap.addEventListener('click', function (evt) {
    evt.preventDefault();
    fullMap.classList.add('popup-show');
})

fullMapClose.addEventListener('click', function (evt) {
    evt.preventDefault();
    fullMap.classList.remove('popup-show');
})
