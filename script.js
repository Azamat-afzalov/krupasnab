const openBtn = document.getElementById('menuOpenBtn');
const closeBtn = document.getElementById('menuCloseBtn');
const menu = document.getElementById('menu');

openBtn.addEventListener('click', e => {
    menu.classList.add('header__nav--active');
});
closeBtn.addEventListener('click', e => {
    menu.classList.remove('header__nav--active')
})