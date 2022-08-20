export const first = document.getElementById('input');
export const sec = document.getElementById('input-sec');

export const firstNum = document.querySelector('.first');
export const secondNum = document.querySelector('.second');

export function handleChange(e) {

  console.log(e.target.value)
  console.log(first.value)
  console.log(firstNum.textContent)
  firstNum.textContent = first.value;
  secondNum.textContent = sec.value;
}