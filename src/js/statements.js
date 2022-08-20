import { handleChange, first, sec, firstNum, secondNum } from "./events.js";

export const operator = document.querySelector('.operator');
export const answer = document.querySelector('.answer');

export function equalify(e) {
  // console.log('click')
  let firstValue =  parseInt( firstNum.textContent);
  let secondValue = parseInt(secondNum.textContent);
  let operatorValue =  (operator.textContent);

  if(operatorValue === "+") {
    let calculation = firstValue + secondValue;
    console.log(calculation) 
    answer.textContent = calculation;
  }
  if(operatorValue === "-") {
    let calculation = firstValue - secondValue;
    console.log(calculation) 
    answer.textContent = calculation;
  }
  if(operatorValue === "x") {
    let calculation = firstValue * secondValue;
    console.log(calculation) 
    answer.textContent = calculation;
  }
  if(operatorValue === "/") {
    let calculation = firstValue / secondValue;
    console.log(calculation) 
    answer.textContent = calculation;
  }

}

