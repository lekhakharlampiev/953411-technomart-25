
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
// слайдер товаров
var slider = document.querySelectorAll(".js-slider-product");
var nextSlider = document.querySelector(".js-next-slider");
var previousSlider = document.querySelector(".js-previous-slider");

nextSlider.addEventListener('click', function(evt) {
	evt.preventDefault();
	slider[nextSliderIndex(slider)].classList.add("show-slider");

})
previousSlider.addEventListener('click', function(evt) {
	evt.preventDefault();
	slider[previousSliderIndex(slider)].classList.add("show-slider");

})
//функция переключения слайдеров вперед по кругу
var nextSliderIndex = function(slider) {
	var start;
	//находим слайдер, который включен
	for(i = 0; i < slider.length; i++) {
		if(slider[i].classList.contains("show-slider")) {
			start = i;
		}
	}
	//отключаем активный слайдер
	slider[start].classList.remove("show-slider");
	var next;
	//если слайдер был последний, возвращаемся к первому,
	//если нет - переходим к следующему
	if (start === slider.length - 1) {
		next = 0;
	} else {
		next = start + 1;
	}

	return next;
}
//функция переключения слайдера назад по кругу
var previousSliderIndex = function(slider) {
	var start;
	//находим слайдер, который включен
	for(i = 0; i < slider.length; i++) {
		if(slider[i].classList.contains("show-slider")) {
			start = i;
		}
	}
	//отключаем активный слайдер
	slider[start].classList.remove("show-slider");
	var next;
	//если слайдер был последний, возвращаемся к первому,
	//если нет - переходим к следующему
	if (start === 0) {
		next = slider.length - 1;
	} else {
		next = start - 1;
	}

	return next;
}
//конец слайдера товаров