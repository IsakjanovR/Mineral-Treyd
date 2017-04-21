/**
 * Created by serj on 21.04.17.
 */
'use strict';

const item1 = document.querySelector('.main-nav__item--1');
const item2 = document.querySelector('.main-nav__item--2');
const item3 = document.querySelector('.main-nav__item--3');

item1.addEventListener('click', function () {
  item1.classList.toggle('main-nav__item--active');
  item2.classList.remove('main-nav__item--active');
  item3.classList.remove('main-nav__item--active');
});

item2.addEventListener('click', function () {
  item2.classList.toggle('main-nav__item--active');
  item1.classList.remove('main-nav__item--active');
  item3.classList.remove('main-nav__item--active');
});

item3.addEventListener('click', function () {
  item3.classList.toggle('main-nav__item--active');
  item1.classList.remove('main-nav__item--active');
  item2.classList.remove('main-nav__item--active');
});