/*---menu-burger---*/
const menuBurger = document.querySelector('.menu__burger');

//делаем проверку на наличие класса .menu__icon
if (menuBurger) {
  menuBurger.addEventListener('click', function (e) {
    document.body.classList.toggle('lock');
    menuBurger.classList.toggle('active');
  });
}
/*---modal---*/

const loginLink = document.querySelector('.header__link--transparent');
const modalPopup = document.querySelector('.modal-contacts');
const modalClose = modalPopup.querySelector('.modal-contacts__close');
const cardsBtn = document.querySelectorAll('.cards__btn');
const form = modalPopup.querySelector('.form__btn');
const login = modalPopup.querySelector('[name=login]');
const password = modalPopup.querySelector('[name=passwords]');

modalClose.addEventListener('click', function () {
  modalPopup.classList.remove('modal-show');
  modalPopup.classList.remove('modal-error');
});

form.addEventListener('click', function (evt) {
  if (!login.value || !password.value) {
    evt.preventDefault();
    modalPopup.classList.remove('modal-error');
    modalPopup.offsetWidth = modalPopup.offsetWidth;
    modalPopup.classList.add('modal-error');
  }
});

loginLink.addEventListener('click', function (evt) {
  evt.preventDefault();
  modalPopup.classList.add('modal-show');
  login.focus();
});

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    if (modalPopup.classList.contains('modal-show')) {
      evt.preventDefault();
      modalPopup.classList.remove('modal-show');
      modalPopup.classList.remove('modal-error');
    }
  }
});

/*---tabs---*/
const tabsBtn = document.querySelectorAll('.tabs__nav-btn');
const tabsItems = document.querySelectorAll('.tabs__item');

tabsBtn.forEach(onTabClick);

function onTabClick(item) {
  item.addEventListener('click', function () {
    let currentBtn = item;
    let tabId = currentBtn.getAttribute('data-tab');
    let currentTab = document.querySelector(tabId);

    if (!currentBtn.classList.contains('active')) {
      tabsBtn.forEach(function (item) {
        item.classList.remove('active');
      });

      tabsItems.forEach(function (item) {
        item.classList.remove('active');
      });

      currentBtn.classList.add('active');
      currentTab.classList.add('active');
    }
  });
}
document.querySelector('.tabs__nav-btn').click();
