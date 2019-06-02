//модальное окно каталога
//открывается по нажатию на кнопку "купить" в карточке товара
var popupInCatalog = document.querySelector('.js-popup-catalog');
var popupCatalogClose = document.querySelector('.js-close-popup-catalog');
var toBuyProductButton = document.querySelector('.js-card-product-buy');

toBuyProductButton.addEventListener('click', function (evt) {
	evt.preventDefault();
	popupInCatalog.classList.add('popup-show');
});

popupCatalogClose.addEventListener('click', function (evt) {
	evt.preventDefault();
	popupInCatalog.classList.remove('popup-show');
});
