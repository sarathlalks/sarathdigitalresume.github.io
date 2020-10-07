const reveal = document.querySelector('.main-navi');
const trigger = document.querySelector('.trigger')

function OpenClick() {
    trigger.classList.toggle('active');
    reveal.classList.toggle('active');
}

trigger.addEventListener('click', OpenClick);