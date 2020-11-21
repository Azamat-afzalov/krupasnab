const openBtn = document.getElementById('menuOpenBtn');
const closeBtn = document.getElementById('menuCloseBtn');
const menu = document.getElementById('menu');

openBtn.addEventListener('click', e => {
    menu.classList.add('header__nav--active');
});
closeBtn.addEventListener('click', e => {
    menu.classList.remove('header__nav--active')
});

const productsItems = document.querySelectorAll('.products__item');
let delay = 0;
productsItems.forEach((item) => {
    delay = delay + 150;
    item.setAttribute("data-aos-delay", delay)
});

const galleryItems = document.querySelectorAll('.gallery__item');
let galleryDelay = 0;
galleryItems.forEach((item) => {
    galleryDelay = galleryDelay + 150;
    item.setAttribute("data-aos-delay", galleryDelay)
});
