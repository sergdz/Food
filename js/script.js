       'use strict';
       import cards from'./modules/cards';
        import calc from './modules/calc' ;
        import forms  from './modules/forms' ;
        import modal  from './modules/modal' ;
        import slider  from './modules/slider' ;
        import tabs from './modules/tabs' ;
        import timer from './modules/timer' ;
        import {openModal} from './modules/modal' ;

window.addEventListener('DOMContentLoaded', function () {

    const modalTimerId = setTimeout(() => openModal('.modal', modalTimerId), 300000);


    cards();
    calc();
    forms('form',modalTimerId);
    timer('.timer', '2023-05-30');
    modal('[data-modal]', '.modal', modalTimerId);
    slider({
        container: '.offer__slider',
        nextArrow: '.offer__slider-next',
        totalCounter: '#total',
        prevArrow: '.offer__slider-prev',
        slide: '.offer__slide',
        wrapper:'.offer__slider-wrapper',
        currentCounter: '#current',
        field: '.offer__slider-inner'
    });
    tabs('.tabheader__item','.tabcontent', '.tabheader__items', 'tabheader__item_active');




});
