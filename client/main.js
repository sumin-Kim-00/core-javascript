

import {getNode, saveStorage} from "./lib/index.js"


const textField = getNode('#textField')
const deleteButton = getNode('input[value="삭제"]')


localStorage('area').then((res)=>{
  textField.value - res;
})


function inputHandler(){

  saveStorage('area', textField.value)
}


textField.addEventListener('input', inputHandler) // input - 사용자가 입력하는지 계속 체크함