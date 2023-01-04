/* ---------------------------------------------------------------------- */
/* Functions → Expression                                                 */
/* ---------------------------------------------------------------------- */


function calcTotal(moneyA, moneyB, moneyC, moneyD) {
  return moneyA + moneyB + moneyC + moneyD;
}

let resultX = calcTotal(10000, 8900, 1360, 2100);
let resultY = calcTotal(21500, 3200, 9800, 4700);
let resultZ = calcTotal(9000, -2500, 5000, 11900);

// console.log(resultX);
// console.log(resultY);
// console.log(resultZ);


/*  ---------------------정리------------------------

// 함수 안에서만 접근 간으한 인숟르의 집합 객체로서 배열과 유사하여 유사 배열 타입으로 불리는 변수: arguments
// arguments 객체를 사용해 함수의 매개변수 없이 아이템의 총합을 구할 수 console.error('있다',있다)
// 유사배열은 배열이 아니다. 고로 배열의 능력을 사용하려면 진.짜. 배열로 만들어야 한다.
// 배열의 능력: forEach, reduce - 이것들의 매개변수 종류와 갯수, 순서 이런건 정해져 있음
*/


// 함수 선언 → 일반 함수 (표현)식
let calculateTotal = function(moneyA, moneyB, moneyC, moneyD) {

  //인수로 받은 모든 값들을 담음(매개변수로 받는 개수를 초과해도), 함수 자체에서 제공해주는 변수
  arguments
  //arguments는 iterable한 요소이므로 for 문으로 접근 가능(유사배열)

  let arr = Array.from(arguments)  // Array.from - 배열로 만들어줌, static method(누구나 다 쓸 수 있는거)
  // let arr = Array.prototype.slice.call(arguments);  // slice는 배열만 쓸 수 있음(진짜 Array의 능력을 빌려서 slice씀), instance method(진짜 Array만 쓸 수 있는거)

  // 콜백함수
  // 배열의 능력 중 forEach 엄청 많이씀
  // arr.forEach(function(item, index){   // 무조건 item, index 이 순서여야함!!
  //   total += item;
  // })

  // return arr.reduce(function (acc, item){   // acc(accomodation?) - 누적
  //   return acc + item
  // })


  let total = 0;
  // for(let i=0;i < arguments.length; i++){
  //   total += arguments[i]
  // }

  for(let value of arguments){
    total += value;
  }

  return total;
  // return moneyA + moneyB + moneyC + moneyD;
};


console.log(calculateTotal(100, 500, 300, 150, 200));

// 익명(이름이 없는) 함수 (표현)식
let anonymousFunctionExpression = function() {};


// 유명(이름을 가진) 함수 (표현)식
// 하지만 이건 의미 없음, 이렇게 해도 hello()로 호출 불가
let namedFunctionExpression = function hello() {};


// 콜백 함수 (표현)식
let callbackFunctionExpression = function (url, resolve, reject){

  // if(typeof url === 'string' && url.includes('http') && url.includes('www')){
  if(typeof url === 'string' && url.match(/http.+www/)){   // 정규 표현식
    resolve(url);
  }else{
    reject();
  }

};

callbackFunctionExpression(
  'https://www.naver.com',
  function (url) {
    console.log(`${url} 해당 페이지로 이동합니다.`);
  },
  function () {
    throw new Error('url 입력 정보가 올바르지 않습니다.');
  }
)
// 왜 굳이 이렇게 함수를 던지냐? - 이 인자에 따라서 "동작"을 해야할 때



// 함수 선언문 vs. 함수 (표현)식
// 이 둘은 호이스팅, 스코프, 구문 등의 차이가 있음
function aa() {

}

const bb = function () {}



// 즉시 실행 함수 (표현)식
// Immediately Invoked Function Expression
// 요즘엔 많이 안씀
let IIFE;

(function () {
  // 여기에 쓰는 것들 바로 실행됨
  console.log('Hello~');

}) ()