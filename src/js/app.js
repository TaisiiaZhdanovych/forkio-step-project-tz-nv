import * as flsFunctions from "./modules/functions.js";

// flsFunctions.isWebp();

import Swiper, { Navigation, Pagination } from 'swiper';

const swiper = new Swiper();

const burger = document.querySelector('.header__burger');
const menu = document.querySelector('.header__menu');

function burgerToggle(){
        burger.classList.toggle('active');
        menu.classList.toggle('active');
        document.body.classList.toggle('lock');
}

burger.addEventListener('click', burgerToggle);

document.addEventListener('click', function(event) {
        const click = event.composedPath().includes(burger) || event.composedPath().includes(menu);
        if (!click) {
                menu.classList.remove('active');
                burger.classList.remove('active'); 
                document.body.classList.remove('lock');
        }
})