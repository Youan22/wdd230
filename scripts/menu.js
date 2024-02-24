const btn = document.querySelector('#hamburgerBtn');
const nav = document.querySelector('nav');
const darkmodebtn = document.querySelector('#darkmodebtn');
const body = document.querySelector('body');

darkmodebtn.addEventListener('click', toggleDarkMode);
function toggleDarkMode() {
    body.classList.toggle('darkmode');
}




btn.addEventListener('click', toggleMenu);
function toggleMenu() {
    nav.classList.toggle('open');
    btn.classList.toggle('open');

}

