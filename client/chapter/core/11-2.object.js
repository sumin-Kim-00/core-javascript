/* ---------------------------------------------------------------------- */
/* Copy object by reference                                               */
/* ---------------------------------------------------------------------- */


// 복사(copy) vs. 참조(reference)

let message = '문자 값은 프리미티브 데이터 타입으로 값이 복사됩니다.';
let messenger = {
  name: 'kakao talk',
  manufacture: 'kakao'
};

let text = message;   // 진짜 복사
let conversationTool = messenger;   // 참조에 의한 복사

text = '안뇽><'; 

// conversationTool.name = 'Line';  

// 비교 (복사 vs. 참조)
console.log(message == text);
console.log(message === text);
console.log(messenger == conversationTool);
console.log(messenger === conversationTool);


// 객체 복사 ( 참조에 의한 것이 아닌 진짜 복사)

// 1. for ~ in 문을 사용한 복사
const cloneObject = {}

for (const key in messenger) {
  cloneObject[key] = messenger[key];
}


// 2. Object.assign()을 사용한 복사
const copyObject = Object.assign({}, messenger);


// 3. 전개 연산자(...)를 사용한 복사  Spread Operator
const spreadObject = { ...messenger};   // 진짜 좋아요 개꿀, 배열이든 객체든


// 4. 객체를 복사해주는 유틸 함수 
// function objectCopy(object) {
//   let copyObj = {};

//   for (let [key, value] in object){
//     copyObj[key] = key
//     copyObj[value] = value;
//   }

//   return copyObj;
// }
// 이거 왜 틀렸는지 분석하기

const copydObject = object => Object.assign({}, object);

console.log(copydObject(messenger));


// 객체 병합(합성)
const cssMapA = {
  color: '#4b004b',
  margin: '0 auto',
};

const cssMapB = {
  display: 'flex',
  flexFlow: 'column',
  justifyContent: 'center',
  padding: '0.4em 0.62em',
  color: '#3f9e97',  // 위의 color 보다 우선순위가 높으므로(뒤에 왔으니까) 얘가 전에 애를 덮어씀 
};

// let combinedCssMap = Object.assign({}, cssMapA, cssMapB);
let combinedCssMap = {...cssMapA, ...cssMapB};   // spread Operator




// 중첩된 프로퍼티에 객체를 포함하는 객체 복사
// 얕은 복사 vs. 깊은 복사
const containerStyles = {
  'min-height': '100vh',
  'max-width': {
    sm: '90%',
    md: 640,
    lg: 960,
    xl: 1120,
    xxl: 1140
  },
};


// let copyedContainerStyles = {...containerStyles};   // 얖은 복사
// 얘의 max-width 를 바꾸면 containerStyles도 바뀜



// 1. 깊은 복사 유틸리티 함수
function cloneDeep(object) {
  return Object.fromEntries(  // fromEntries - 키,값 쌍의 목록을 객체로 만들어줌
    Object.entries(object).map(([key, value]) => {    // map method를 통해 구조 분해
      let type = typeof value;  
      if (value && type === 'object') {
        value = cloneDeep(value);   // 재귀 함수
      }
      return [key, value];
    })
  );
}

let copyedContainerStyles = cloneDeep(containerStyles);   // 깊은 복사


// 2. Lodash 라이브러리 활용
// _.cloneDeep(value)
// 참고: https://lodash.com/docs/4.17.15#cloneDeep
// CDN : https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js
