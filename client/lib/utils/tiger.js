

const defaultOptions = {
  method: 'GET',
  mode: 'cors',
  body: null,
  cache: 'no-cache',
  credential: 'same-origin',
  redirect: 'follow',
  referrerPolicy: 'no-referrer',
  headers: {
    'Content-Type':'application/jsonl charset=UTF-8'
  }
}



export const tiger = async (options = {}) => {

  //             rest parameter - 합성으로 나온 결과에 url만 빼고 나머지들 객체로 넘김
  const {url, ...restOptions} = {
    ...defaultOptions, ...options,
    headers: {...defaultOptions.headers, ...options.headers}   // 객체 안 객체니까 기본값이 바뀌게 하지 않기 위해 얕복 한번 더 함
  }



  // await는 async 함수 안에서만 사용 가능함
  let response = await fetch(
    'https://jsonplaceholder.typicode.com/users/1',
    {
      method: 'GET',
      headers: {
        'Content-Type':'application/json'
      },
      body: null
    }
  )
  // 위에가 끝날 때 까지 기다린 다음에 출력
  // console.log(response);
  if(response.ok){
    response.data = await response.json(); 
    // await 없이 쓰면 프로미스 객체가 나옴, 거기서 우리가 원하는 객체를 뽑아내기위해 await을 쓰면 그 객체만 나옴
  }

  return response;    // 보통 data를 return 하진 않음, 밑에 호출부에서 get 등등 작업을 할 수도 있기 때문에
  // 그냥 fetch만 된 애를 내보내서 밑에 받는 쪽에서 await해줌
}

// console.log(await tiger());


tiger.get = (url, options) => {
  return tiger({
    url,
    ...options
  })
}

tiger.post = (url, body, options) => {
  return tiger({
    method: 'POST',
    url,
    body: JSON.stringify(body),
    ...options
  })
}

tiger.post('www.naver.com', {name:tiger}, {mode:'cors', headers:{}})


tiger.put = (url, body, options) => {
  return tiger({
    method: 'PUT',
    url,
    body: JSON.stringify(body),
    ...options
  })
}


tiger.delete = (url, options) => {
  return tiger({
    method: 'DELETE',
    url,
    ...options
  })
}
