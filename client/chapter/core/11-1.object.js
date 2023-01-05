/* ---------------------------------------------------------------------- */
/* Object                                                                 */
/* ---------------------------------------------------------------------- */


/* Primitives vs. Object ------------------------------------------------ */

// key:value 쌍으로 구성된 엔티티(entity) 데이터 구조
let cssCode =/* css */ `
  .dialog {
    position: fixed;
    z-index: 10000;
    top: 50%;
    left: 50%;
    width: 60vw;
    max-width: 800px;
    height: 40vh;
    min-height: 280px;
    transform: translate(-50%, -50%);
  }
`;

// 위 CSS 스타일 코드를 JavaScript 객체로 작성해봅니다.
let cssMap = {
  position: 'fixed',
  zIndex: 10000,
  top: '50%',
  left: '50%',
  width: '60vw',
  maxWidth: 800,
  height: '40vh',
  minHeight: 280,
  transform: 'translate(-50%, -50%)',
};


// 인증 사용자 정보를 객체로 구성해봅니다.
// 인증 사용자(authentication user)
// - 이름
// - 이메일
// - 로그인 여부
// - 유료 사용자 권한

// authentication = 인증
// authorization = 권한

let authUser = null ;

authUser = {
  uid : 'user-id-abc',
  name: 'sumin',
  email: 'hi@gmail.com',
  isSignIn: true,
  permission: 'paid',
}


// 점(.) 표기법
// authUser 객체의 프로퍼티에 접근해 Console에 출력해봅니다.

/* console.log(authUser.uid);
console.log(authUser.name);
console.log(authUser.email);
console.log(authUser.isSignIn);
console.log(authUser.permission); */



// 대괄호([]) 표기법 - key 값을 문자로 전달해야함 !!!
// 유료 사용자 권한(paid User Rights) 이름으로 프로퍼티를 재정의하고 
// 대괄호 표기법을 사용해 접근 Console에 출력해봅니다.
// 좀 더 다이나믹한 상황을 받기 좋음

/* console.log(authUser["uid"]);
console.log(authUser["name"]);
console.log(authUser["email"]);
console.log(authUser["isSignIn"]);
console.log(authUser["permission"]);
 */


// 계산된 프로퍼티 (calcurate property)
let calculateProperty = 'phone'; // phone | tel

function createUser(computedProp = calculateProperty) {  // 디폴트 파라미터
  return{
    name: 'unknown',
    email: 'unknown@gmail.com',
    [computedProp]: '010-1234-5678',
  }
}

const User = createUser('tel')


// 프로퍼티 포함 여부 확인

Object.prototype.SIGN = true; // 그냥 key만 출력하면 얘까지 나오게 됨

for(let key in authUser) {

  // Object.prototype = {}
  if({}.hasOwnProperty.call(authUser, key)) {  // instance method, Object의 능력을 빌림(call로)
    // console.log(key);
  }
}



// 프로퍼티 나열
// authUser : 객체 --> 배열로 

let keyArray = Object.keys(authUser);
let valueArray = Object.values(authUser);
let entryArray = Object.entries(authUser);


const getPropertiesList = object => Object.keys(object);


// function getPropertiesList(object) {
//   return Object.keys(object);
// }

// function getPropertiesList(object) {
//   let result;
//   for(let key in object) {
//     result.push(key);
//   }
//   return result;
// }



let result = getPropertiesList(authUser);

//         remove  delete
// 프로퍼티 제거 or 삭제 

// 제거 or 삭제를 하는 유틸 함수를 만들 수 있을 것 같은데..?

/* 
1. 함수 이름 정하기
2. 인수(arguments)와 인자(parameter) 정하기
3. 확인하기 (validation)
4. 리턴값 (return)
*/

function removeProperty(object, key) {

  // validation 까지 하면 너무 길어지므로 나중에 할거임
  // if(!(typeof object === 'object')) throw new Error('너가 준건 객체가 아니야!')

  object[key] = null;
}

function deleteProperty(object, key) {
  delete object[key];
}


removeProperty(authUser, 'uid');
deleteProperty(authUser, 'uid')



// 단축 프로퍼티

let name = '선범';
let email = 'seonbeom2@euid.dev';
let authorization = 'Lv. 99';
let isLogin = true;

// 단축 프로퍼티 shorthand property
const student = { name, email, authorization, isLogin }


// 프로퍼티 이름 제한
// 예약어: class, if, switch, for, while, ...  이런거 써도 오류는 안나지만 쓰지 말기!



// 객체가 프로퍼티를 포함하는 지 유무를 반환하는 유틸리티 함수 isEmptyObject 작성
// 객체의 키를 배열로 바꾸고 그 배열의 갯수가 0이면 true, 그렇지 않다면 false를 반환

function isEmptyObject(object) {

  // let keyValue = Object.keys(object)

  // if (keyValue.length === 0) return true;
  // else return false;

  return Object.keys(object).length === 0;  // 0이면 true 반환

}

const empty = {};

console.log(isEmptyObject(empty));



let salaries = {
  John: 100,
  Ann: 160,
  Pete: 430
}

function totalSalary(object) {
  let total = 0;

  // for(let keyValue of Object.entries(object)){
  //   let key = keyValue[0]
  //   let value = keyValue[1]

  // 배열의 구조 분해 할당  destructiuring assignments - 지이인짜 많이 씀!!
  // key와 value를 분해해서 할당함
  for(let [key, value] of Object.entries(object)){
    total += value;
  }

  return total;

}

console.log(totalSalary(salaries));



let color = ['#ff0000', '#2b00ff', '#00ff2f'];  
// const COLOR_RED = color[0];
// const COLOR_BLUE = color[1];
// const COLOR_GREEN = color[2];


const [COLOR_RED, COLOR_BLUE, COLOR_GREEN] = color;

// 발췌 (원하는 값만)
const [ , , GREEN] = color;



/* 객체 구조 분해 할당  */
// 앞으로 John라는 변수로 John의 월급에 접근 가능
// 순서 바꿔도 이름이 같으므로 이름에 맞는 월급 잘 나옴!( 키 값만 같으면 순서 상관 X )
const { John, Ann, Pete } = salaries;   // 단축 프로퍼티

