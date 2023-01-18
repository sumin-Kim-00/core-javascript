import { getNode } from "../dom/getNode.js";
import { isNumber, isObject } from "./typeOf.js";



const first = getNode('.first');

function delay(callback, timeout) {
  setTimeout(callback, timeout);

}

/* 
delay(()=>{
  first.style.top = '-100px';
  delay(()=>{
    delay(()=>{
      first.style.top = '0px';
    })
    first.style.transform = 'rotate(360deg)';
  })
})
 */


/* 
// 이렇게 then then then 연결해서 쓸 수 있음(promise를 뱉기 때문(return)에 가능, 프라미스 체이닝)
delayP()
.then(()=>{
  first.style.top = '-100px';
  return delayP()
})
.then(()=>{
  first.style.transform = 'rotate(360deg)';
  return delayP()
})
.then(()=>{
  first.style.top = '0px';
})  // 마지막엔 받을 애가 없으니 return 안해줘도 됨

 */


const defaultOptions = {
  shouldReject : false,
  timeout : 1000,
  data : '성공했습니다.',
  errorMessage : '알 수 없는 오류가 발생했습니다.'
}

export function delayP(options = {}) {
  // const {shouldReject, timeout, data, errorMessage} = options;

  let config = { ...defaultOptions };   // ... : spread operator(전개 연산자) - 모든 것들이 다 담김(얕은 복사)
  // 그냥 config = defaultOptions 하면 "참조에 의한 복사"가 되므로 config가 바뀌면 저것도 바껴서 원래 데이터가 안전하도록 복사함
  // * 깊은 복사는 객체 안의 객체까지 서로 다른 메모리로 나눴을 때(얕복은 변수만 나뉨, 객체 안 객체는 참조함)
  // 얕은복사는 1depth 까지만 복사되고 깊은 복사는 depth 상관없이 완전히 복사하는거
  // 얕은복사는 Object.assign, ... 등으로 사용가능


  if(isNumber(options)) config.timeout = options;


  // 객체 함성 mixin - 많이쓰므로 꼭 알아두기!
  // 기본값이 아니라 우리가 던져준 값을 쓰기 위해서 그 두개를 합성(너 값있어? 그럼 너 걸로 바꿔!!)
  // 원래 컨피그 객체 + 우리가 넣을 옵션들 추가하기 (근데 옵션값이 컨피그값과 동일하면 옵션값으로 덮어주기)
  // 뒤에 있는 애가 앞에 애를 덮어 씀 !
  if(isObject(options)) config = { ...config, ...options};



  const {shouldReject, timeout, data, errorMessage} = config;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // if(!shouldReject) resolve('성공!');
      // else reject('실패!');
      !shouldReject ? resolve(data) : reject(errorMessage);
    }, timeout);
  })
}



// delayP(3000).then((res=>console.log(res)))


// // 인자 순서 상관없어짐
// delayP({
//   errorMessage: '잘가',
//   timeout : 1000,
//   data : '아싸 성공~~!!!!',
// }).then((res=>console.log(res)))

/* 
// resolve(or reject) 괄호 안의 값을 result(res)로 받음
delayP()
.then(res=>console.log(res))
.catch(err=>console.log(err)) */




// async await


// async : 일반 함수를 promise를 반환하는 함수로 만든다.
// await :  1. promise가 반환하는 result를 가져오기.
//          2. 코드 실행 흐름 제어 

/* 
function delayA(){
  return new Promise((resolve, reject) => {
    resolve('완료')
  })
}
 */

async function delayA(){
  return '완료'
}


let result = await delayA()







async function 라면끓이기(){

  try{

    await delayP()
    first.style.top = '-100px';

    await delayP()
    first.style.transform = 'rotate(360deg)';

    await delayP()
    first.style.top = '0px';

    await delayP()
    console.log('계란넣기');

    // throw new Error('계란 껍질이 들어가버렸다!');
    await delayP()
    console.log('그릇에담기');

  }catch(err){
      console.log(err);
  }



}




라면끓이기()