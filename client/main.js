
import {insertLast, xhrData, tiger, delayP} from "./lib/index.js"


// xhrData.get(
//   'https://jsonplaceholder.typicode.com/users/1',
//   (result)=>{
//     console.log(result);
//     insertLast('body', JSON.stringify(result))
//   },
//   (err)=>{
//     console.log(err);
//     // insertLast('body', err)
//     insertLast('body', '데이터 로딩에 실패하였습니다.')
//   }
// )


async function render(){
  await delayP(2000);   // 2초 뒤에 수행
  let response = await tiger.get('https://jsonplaceholder.typicode.com/users/1')
  
  console.log(response.data);
}

render()