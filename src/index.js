// console.log('webpack experiment!');

import { equalify, operator } from "./js/statements.js";
import { handleChange, first, sec, firstNum, secondNum } from "./js/events.js";
// import  './main.css';
import  './main.scss';

// const first = document.getElementById('input');
// const sec = document.getElementById('input-sec');
// const firstNum = document.querySelector('.first');
// const secondNum = document.querySelector('.second');
const btns = document.querySelectorAll('.btn');
const equal = document.querySelector('.equal');

first.addEventListener('click', handleChange);
sec.addEventListener('click', handleChange);

btns.forEach((btn) => {
  btn.addEventListener('click', () => {
    operator.textContent = btn.innerText;
    operator.style.fontSize = '1.8rem';
    operator.style.color = 'lime';
    console.log(btn.innerText)
  })
})

equal.addEventListener('click', equalify);




