const carousel = document.querySelector('.carousel');
const item = carousel.querySelectorAll('.ui-card')[0];

const buttons = document.querySelectorAll('.team__section__btn button');


let firstItemWidth = item.clientWidth + 32;
let scrollWidth = carousel.scrollWidth - carousel.clientWidth

const showHideButton = () => {
    carousel.scrollLeft == 0 ? buttons[0].classList.add('btn__disabled') : buttons[0].classList.remove('btn__disabled');
    carousel.scrollLeft == scrollWidth ? buttons[1].classList.add('btn__disabled') : buttons[1].classList.remove('btn__disabled');

}

buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        carousel.scrollLeft += btn.id == 'left' ? -firstItemWidth : firstItemWidth
        setTimeout(() => showHideButton(), 60)
    })
})






