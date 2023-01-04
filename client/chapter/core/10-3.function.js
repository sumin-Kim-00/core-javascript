/* ---------------------------------------------------------------------- */
/* Functions → Arrow                                                      */
/* ---------------------------------------------------------------------- */


// const calculateTotal = function(moneyA, moneyB, moneyC, moneyD) {
//   return moneyA + moneyB + moneyC + moneyD;
// }



/* --------- rest parameter ------------ */
// 화살표 함수는 arguments 없음!!! 대신에 매개변수 안에 ...args 쓰면됨(일반 함수도 이거 되긴함)
// 호출한 대상의 모든 값들을 다 담아줌
// 이 args는 진짜 배열임 -> 바로 forEach 등 쓸 수 있음
const calculateTotal = ( ... args ) => {

  let total = 0;

  // 콜백 함수
  args.forEach(item => {
    total += item;
  })

  // args.reduce((acc, item) => acc + item)

  return total;

}


let resultX = calculateTotal(10000, 8900, 1360, 2100);
let resultY = calculateTotal(21500, 3200, 9800, 4700);
let resultZ = calculateTotal(9000, -2500, 5000, 11900);

// console.log(resultX);
// console.log(resultY);
// console.log(resultZ);


// 함수 선언 → 화살표 함수 (표현)식
let calcAllMoney = (A, B, C, D) => A + B + C + D;



// 화살표 함수와 this

// 화삼표 함수는 this를 바인딩 하지 않음, 일반 함수는 나를 호출한 대상을 this로 삼음
// 화살표 함수는 this 자체를 찾지도 않고 그냥 부모를 찾음, 그래서 결과는 그냥 전역인 window를 가리킴
// 그래서 객체 안에서의 메소드로는 일반 함수가 더 좋음!! (화살표는 그냥 window를 가리키니까..)
// 화살표 함수는 콜백함수에서 많이씀!!(forEach나 이런거)


// 객체의 메서도르 함수를 실행한 경우는 일반함수로 실행해야 this가 객체를 찾음
// 근데 메서드 안에서의 함수는 this를 찾기 위해서는 arrowFunction이 오히려 좋음 ! (부모를 찾기 때문에)


/* 다음 함수를 작성해봅니다. -------------------------------------------------- */

// pow(numeric: number, powerCount: number): number;
// 반복문으로 만들어보기
let pow = (x,n) => {
  let result = 1;
  for (let i =0;i<n;i++) {
    result *= x;
  }
  return result;
}; 

console.log(pow(2, 3));
 
let powExpression = (numeric, powerCount) => Array(powerCount).fill(null).reduce(acc=>acc * numeric,1);
                            // reduce의 초기값을 정해줄 수 있음(문자, 객체, 배열 등도 넣을 수 있음(1자리에))



// repeat(text: string, repeatCount: number): string;
let repeat = (text, repeatCount) => {
  let result = '';

  if(!repeatCount) throw new Error('숫자 넣어...');

  for(let i =0; i < repeatCount; i++){
    result += text;
    // result += ' ';
  }

  return result;
}; 


let repeatExpression = (text, repeatCount) => Array(repeatCount).fill(null).reduce(acc=>acc + text,''); // 초가값이 문자열


console.log(repeatExpression('Hi', 3));