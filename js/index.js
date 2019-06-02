//модальное окно каталога
//открывается по нажатию на кнопку "купить" в карточке товара
var popupInCatalog = document.querySelector('.js-popup-catalog');
var popupCatalogClose = document.querySelector('.js-close-popup-catalog');
var toBuyProductButton = document.querySelectorAll('.js-card-product-buy');
var returnShoppingButton = document.querySelector('.js-return-shopping');

for (var i = 0; i < toBuyProductButton.length; i++) {
	toBuyProductButton[i].addEventListener('click', function (evt) {
	evt.preventDefault();
	popupInCatalog.classList.add('popup-show');
});
}

popupCatalogClose.addEventListener('click', function (evt) {
	evt.preventDefault();
	popupInCatalog.classList.remove('popup-show');
});

returnShoppingButton.addEventListener('click', function (evt) {
	evt.preventDefault();
	popupInCatalog.classList.remove('popup-show');
});
