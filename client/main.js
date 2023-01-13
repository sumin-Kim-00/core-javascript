// 웹 브라우저 환경
/* eslint no-undef:'warn' */
/* eslint no-unused-vars: 'off' */


// import { getNode } from "./lib/dom/getNode.js"    // 대게 import 문은 최상위에 있음
// import { attr } from "./lib/dom/attr.js"    
// import { css, addClass, removeClass, toggleClass } from "./lib/dom/css.js" 
// 이렇게 하면 너무 길어짐

// 이 변수들 순서는 아무 상관없음!! 그냥 받기만 하면 됨!!
import { css, addClass, removeClass, toggleClass } from "./lib/index.js" 


const firstInput = getNode('#firstNumber');
const secondInput = getNode('#secondNumber');
const done = getNode('#done');
const result = getNode('.result');


function getInputValue(node){
  if(typeof node === 'string') node = getNode(node);
  if(node.tagName !== 'INPUT') refError('getInputValue 함수는 INPUT ELEMENT만 허용합니다.')
  return node.value;
}

const sum = (valueA, valueB) => valueA + valueB;

function clearContents(node){
  if(typeof node === 'string') node = getNode(node);
  node.textContent = '';
}


function handler(e){
  e.preventDefault();

  let firstValue = +getInputValue(firstInput);
  let secondValue = +getInputValue(secondInput)
  let total = sum(firstValue, secondValue);
  
  // result.textContent = total;

  clearContents(result);
  insertLast(result, total);
}


function inputHandler(){
  let firstValue = +getInputValue(firstInput);
  let secondValue = +getInputValue(secondInput)
  let total = sum(firstValue, secondValue);
  
  clearContents(result);
  insertLast(result, total);
}



done.addEventListener('click', handler);

// change 이벤트 - 값이 변경됐을 때 실시간으로 이벤트 발생
firstInput.addEventListener('change', inputHandler);
secondInput.addEventListener('change', inputHandler);




// console.log(firstValue);