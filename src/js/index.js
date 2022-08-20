// console.log('webpack experiment!');

import { equalify, operator } from "./statements.js";
import { handleChange, first, sec, firstNum, secondNum } from "./events.js";

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
    operator.style.fontSize = '1.4rem';
    operator.style.color = 'lime';
    console.log(btn.innerText)
  })
})

equal.addEventListener('click', equalify);




