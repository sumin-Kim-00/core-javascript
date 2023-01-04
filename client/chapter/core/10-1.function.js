/* ---------------------------------------------------------------------- */
/* Functions → Declaration                                                */
/* ---------------------------------------------------------------------- */

/* console.log("총 합 = ", 10000 + 8900 + 1360 + 2100);
console.log("총 합 = ", 21500 + 3200 + 9800 + 4700);
console.log("총 합 = ", 3800 + 15200 - 500 + 80200);
console.log("총 합 = ", 560 + 5000 + 27100 + 10200);
console.log("총 합 = ", 9000 - 2500 + 5000 + 11900); */


// 문: 값을 반환 x / 식: 값을 반환 o

// if 문 if ... { // scope }
// for 문 for ... {}
// while 문 while ... {}
// dowhile 문 do 

// 함수선언 문

// let result = condition ? value1 : value2
// let result = value1 || value2
// let result = value1 && value2


// default parameter

function getRandomValue() {
  return Math.random() > 0.5 ? 1 : 0;
}


function calcPrice(
  priceA = 0,
  priceB = 0, 
  priceC = getRandomValue(), 
  priceD = getRandomValue()
  ) {

    if(!priceA || !priceB){  // 인자가 안들어왔다면
      // 사용자에게 함수를 잘못쓰고 있다고 에러로 알려줌(Error 생성자)
      throw new Error('calcPrice 함수의 첫 번째 인수는 필수 입력값 입니다.');
    }

    return priceA + priceB + priceC + priceD;
}

let result = calcPrice(100, 5023, 234, 5231);
// console.log(result);

// 함수 선언

// 함수 호출

// 함수 값 반환

// 매개 변수

// 매개 변수 vs. 전달 인자

// 외부(전역 포함), 지역 변수

// 매개 변수 기본 값



// 좋은 함수 작성 여건


// * 함수 원리 설명
/*
1. function name
2. validation
3. return value
4. parameter, argument
5. test [Test Driven Development]
*/


/* 다음 함수를 작성해봅니다. -------------------------------------------------- */

// rem(pxValue: number|string, base: number):string;
// let rem;


function rem(pxValue, base = 16){
  //if ((typeof pxValue === 'number' || typeof pxValue === 'string') && typeof base === 'number'){
    if (typeof pxValue === 'string'){
      pxValue = parseInt(pxValue, 10);  // 10진수
    }
    typeof base === 'string' && (base = parseInt(base, 10));  // 앞에 께 트루면 뒤에 값 반환
    
    // let ret = pxValue / base;
    return `${pxValue/base}rem`;
  // }
  // else return false;
}


// TDD(Test Driven Development) - 테스트 주도 개발
// assert - 괄호 안의 값이 예상한 값과 같게 잘 나오는지 테스트함(잘되면 아무것도 안나옴)

console.assert(rem(20) === '1.25rem')
console.assert(rem('30px') === '1.875rem');
console.assert(rem('56px', 10) === '5.6rem')


// css(node: string, prop: string, value: number|strung) : string;
let css;

// node의 값을 'h1'으로 받았을 경우

// node가 없거나 document.ELEMENT_NODE가 아닐 경우

// prop의 값이 string이 아닐 경우

// prop의 값이 sytle 속성이 아닐 경우

// value의 값이 number가 아닌 경우

// 클릭 이벤트를 이용한 h1의 폰트 크기를 증가시키는 함수와 감소시키는 함수 만들기

// 1. h1,plus,minus 요소를 변수로 지정한다.
// 2. h1의 폰트 사이즈를 가져온다.
// 3. 증가함수와 감소함수를 만든다.
// 4. 클릭 이벤트와 바인딩한다.
