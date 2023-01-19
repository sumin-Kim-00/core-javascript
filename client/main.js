/* global gsap */

import {insertLast, tiger, delayP, renderUserCard, getNode as $, changeColor, renderSpinner, renderEmptyCard, attr, clearContents} from "./lib/index.js"
// await - 1. 값 할당(then 대신 사용)
//         2. 실행 흐름 제어(내가 끝나야 다음거 실행)


const userCardContainer = $('.user-card-inner');


// ajax get user List(tiger)
async function rendingUserList(){

  renderSpinner(userCardContainer)

  try{

    await delayP(2000);   // 얘가 완료될 때까지 밑에 코드 실행 안됨 

    // userCardContainer.textContent = ''
    $('.loadingSpinner').remove();
    // await 안쓰면 프라미스 객체가 반환됨, 그 앞에 await 붙이면 값을 response에 할당해줌
    let response = await tiger.get('http://localhost:3000/users') 
    let userData = response.data;
    // console.log(userData);
  
    userData.forEach(data => {
      renderUserCard(userCardContainer, data)
    });
  
  
    changeColor('.user-card')
  
    // console.log(gsap.utils.toArray('.user-card'))
    gsap.to(gsap.utils.toArray('.user-card'),
     {
      x:0,
      opacity: 1,
      duration:1.5,
      stagger: 0.2,
     })

  }catch(err){
    // console.log(err);
    renderEmptyCard(userCardContainer)
  }


}

rendingUserList();

// let userList = await rendingUserList()
// console.log(userList);

// 만들어야하는 함수
// 유저 카드 생성
// 생성된 카드로 렌더링

function handler(e) {
  let deleteButton = e.target.closest('.delete')
  let article = e.target.closest('article')

  // if(e.target === deleteButton) console.log('삭제 !');
  if(!deleteButton || !article) return;

  let id = attr(article, 'data-index').slice(5);

  tiger.delete(`http://localhost:3000/users/${id}`).then(()=>{
    clearContents(userCardContainer)
    rendingUserList()

  })

  console.log(id);
}

userCardContainer.addEventListener('click', handler)

















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


// async function render(){
//   await delayP(2000);   // 2초 뒤에 수행
//   let response = await tiger.get('https://jsonplaceholder.typicode.com/users/1')
  
//   console.log(response.data);
// }

// render()