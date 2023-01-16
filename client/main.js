/* global gsap */

import { getInputValue, getNode, getRandom, clearContents, insertLast, isNumericString, showAlert, copy, addClass, removeClass } from './lib/index.js';
import { jujeobData } from './data/data.js';

const submit = getNode('#submit');
const result = getNode('.result');

console.log(submit);


function clicksubmitHandler(e) {
  e.preventDefault();   // 기본 동작 구문 차단

  let name = getInputValue('#nameField');

  if(!name) {
    // console.log('이름을 입력해주세요'); 
    showAlert('.alert','이름을 입력해주세요!',2000);
    addClass(result, 'shake')

    // GSAP - 밑 코드를 gsap으로 만들기
    // 실제 DOM 대상의 transform을 건들이고 있는거임
    // 대상, duration, vars object(from, to) 순서임
    gsap.fromTo(result, 0.01, {x:-5}, {x:5, clearProps:"x", repeat:20})

    // 이 코드 안넣어주면 shake가 계속 추가돼있어서 다음번에 클릭 시 shake 되지 않음 !
    // setTimeout(() => {
    //   removeClass(result, '.shake')
    // }, 1000);
    // return;
  }
  if(isNumericString(name)) {
    // console.log('제대로 된 이름을 입력해주세요'); 
    showAlert('.alert','제대로 된 이름을 입력해주세요!',2000)
    return;
  }

  let list = jujeobData(name)
  let pick = list[getRandom(list.length-1)]
  

  clearContents(result);
  insertLast(result, pick)


}


function clickCopyHandler(){
  let text = result.textContent;
  // navigator.clipboard.writeText(text);
  
  // then - copy가 완료 됐다면 then 함수를 실행해줘(Promise의 문법임)
  // 약속을 지켰을 때 해야할 일
  copy(text).then(()=>{
    showAlert('.alert-success', '클립보드에 복사가 완료되었습니다.', 2000)
  });   // 약속(Promise)
}



submit.addEventListener('click', clicksubmitHandler);
result.addEventListener('click', clickCopyHandler);