/* ---------------------------------------------------------------------- */
/* Type Conversion                                                        */
/* ---------------------------------------------------------------------- */

/* 데이터 → 문자 ----------------------------------------------------------- */

// number
const YEAR = 2022;

console.log(typeof String(YEAR));

// undefined -> 'undefined'
// null -> 'null'
console.log(String(undefined));

let days = null;
console.log(String(days));

// boolean
let isKind = true;
console.log(isKind + "");

/* 데이터 → 숫자 ----------------------------------------------------------- */

// undeinfed -> NaN
console.log(Number(undefined));

// null -> 0
console.log(Number(null));

// boolean -> true: 1 / false: 0
// *1
// /1
// +
let cutie = true;
console.log(cutie * 1);

// string(숫자형 문자)
// 앞뒤 공백을 제거하고 연산을 함
let num = "123";
console.log(num * 1);

// numeric string
// 그냥 숫자로 형 변환하면 NaN 나옴
// 뒤에 문자 없애고 숫자만 형변환 하는 함수가 parseInt
let width = "320px";
console.log(parseInt(width, 10)); // 10진수(10이 디폴트값, 그래도 명시를 해주는게 좋음)

/* 데이터 → 불리언 ---------------------------------------------------------- */

// null, undefined, 0, NaN, '' → false
// 위에 나열한 것 이외의 것들 → true

console.log(Boolean(null));

console.log(Boolean(123));

console.log(!!null);
console.log(!!" ");
