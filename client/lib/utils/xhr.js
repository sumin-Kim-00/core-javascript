
/* readyState
0: uninitalized  //초기화
1: loading      //로딩
2: loaded   //로딩이 완료된
3:interative  // 인터랙티브
4:complete  // 완료
// 보통 1, 2는 찍히지 않음
 */


//                객체의 구조분해할당 - 여기서 이렇게 하면 초기값을 줄 수 있음
export function xhrData({
  url = '',
  method = 'GET',
  body = null,
  onSuccess = null,
  onFail = null,
  headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  }
} = {}){
// 기본값이 객체다
  
  // 객체의 구조 분해 할당은 순서 상관없음
  
  const xhr = new XMLHttpRequest();
  xhr.open(method, url)


  // Object.endtries - 객체의 key, value 값을 배열로 반환해줌 -> forEach 쓸 수 있음
  // Object.entries => 객체의 프로퍼티를 [키, 값] 으로 반환시킨다
  // Object.entries(headers).forEach(([key, value])=>{
  //   xhr.setRequestHeader(key, value)     // request 할 때 헤더를 세팅해주는 xhr의 내장 함수
  // })

  
  // readystate 값이 변경될 때 마다 이벤트 발생
  xhr.addEventListener('readystatechange', ()=>{
    // 객체 구조 분해 할당
    const {status, readyState, response} = xhr;
    if(status >= 200 && status < 400){    // 200 ~ 399 : 통신성공
      if(readyState === 4) {
        console.log('통신 성공');
        onSuccess(JSON.parse(response));
        // console.log(JSON.parse(response));  // 문자열을 객체화 시킴
      }
    }else{
      // console.error();
      onFail('통신 실패')
    }
  })

  // 서버에 요청
  // post, put을 할 때는 이 함수에 값을 넣어서 보내줘야함
  // 보낼 때는 문자화 시켜서 보내야함
  xhr.send(JSON.stringify(body));
}



// xhrData({
//   url: 'https://jsonplaceholder.typicode.com/users/1',
//   method:'GET',
//   body: null,
//   headers: {
//       'Content-Type': 'application/json'
//   },
//   onSuccess: (result) => console.log(result),
//   onFail: (err) => console.error(err),
// })


// 객체 안의 함수 - 메서드
// 메서드 안에서 함수를 호출하고 있음
xhrData.get = (url, onSuccess, onFail) => {
  xhrData({
    url,
    onSuccess,
    onFail
  })
}
xhrData.post = (url, body, onSuccess, onFail) => {
  xhrData({
    method: 'POST',
    body,
    url,
    onSuccess,
    onFail
  })
}
xhrData.put = (url, body, onSuccess, onFail) => {
  xhrData({
    method: 'PUT',
    body,
    url,
    onSuccess,
    onFail
  })
}
xhrData.delete = (url, onSuccess, onFail) => {
  xhrData({
    method: 'DELETE',
    url,
    onSuccess,
    onFail
  })
}




/* 
xhrData.delete(
  'https://jsonplaceholder.typicode.com/users/1',
  (result)=>{
    console.log(result);
  },
  (err)=>{
    console.log(err);
  }
)
xhrData.get(
  'https://jsonplaceholder.typicode.com/users/1',
  (result)=>{
    console.log(result);
  },
  (err)=>{
    console.log(err);
  }
)
xhrData.post(
  'https://jsonplaceholder.typicode.com/users',
  {
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
  }, 
  (result)=>{
    console.log(result);
  },
  (err)=>{
    console.log(err);
  }
)
 */



// xhrData('POST', 'https://jsonplaceholder.typicode.com/users', {
//     "name": "Leanne Graham",
//     "username": "Bret",
//     "email": "Sincere@april.biz",
//     "address": {
//       "street": "Kulas Light",
//       "suite": "Apt. 556",
//       "city": "Gwenborough",
//       "zipcode": "92998-3874",
//       "geo": {
//         "lat": "-37.3159",
//         "lng": "81.1496"
//       }
//     }
// })






// /* 이 두개는 세트임 !!!(open, send) */
// // 비동기 통신 오픈
// xhr.open('GET', 'https://jsonplaceholder.typicode.com/users')

// // readystate 값이 변경될 때 마다 이벤트 발생
// xhr.addEventListener('readystatechange', ()=>{
//   if(xhr.status >= 200 && xhr.status < 400){    // 200 ~ 399 : 통신성공
//     if(xhr.readyState === 4) console.log('통신 성공');
//   }else{
//     console.error('통신 실패');
//   }
// })

// // 서버에 요청
// xhr.send();




// console.log(xhr);