AOS.init();
let icon = document.querySelector('.icon');
let menu = document.querySelector('.menu');

icon.addEventListener('click', () => {
    menu.classList.toggle('active');
    icon.classList.toggle('active');
})