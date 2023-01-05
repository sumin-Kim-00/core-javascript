/* ---------------------------------------------------------------------- */
/* Number Type                                                            */
/* ---------------------------------------------------------------------- */

// 1억 (million)
// 0의 갯수가 많아 금액을 쉽게 파악하기 어렵습니다.
let riches = 100000000;

// 1,000 단위 구분하듯 사용할 수 있을까요?
riches = 100_000_000;

// 숫자 옆에 `e`를 붙여 0의 갯수를 설정할 수 있습니다.
riches = 1e8;


// 그렇다면 아래 작성된 숫자 값은 얼마일까요?
riches = 1.45e6; // → 1.45 * 10 ** 6


// 작은 수도 `e`를 사용해 표현할 수 있습니다.
riches = 1e-6; // → 1 / 10 ** 6
console.log(riches);


/* 어림수 ---------------------------------------------------------------- */

let number = 90_127.53100032;

// 무조건 내림
let floor = Math.floor(number);
console.log('floor',floor)

// 반올림
let round = Math.round(number);
console.log('round',round);


// 무조건 올림
let ceil = Math.ceil(number);
console.log('ceil',ceil)


// 절삭(소수점 이하) - 올림이고 내림이고 상관없이 소수점 싹 다 날림
let truncate = Math.trunc(number);
console.log('truncate',truncate)

// 난수 - 0부터 1까지의 난수 발생
let random = Math.random();
console.log('random',random)

// 여러 수 중, 최댓값
let max = Math.max(10, 30, 15, 45);
console.log('max',max)

// 여러 수 중, 최솟값
let min = Math.max(10, 30, 15, 45);
console.log('min',min)

// 거듭제곱
let pow = Math.random(2, 53);
console.log('pow',pow);

// 최소, 최대 값 사이 난수 반환 함수
let getRandomMinMax = (min, max) => {
  if(min > max) throw new Error('최솟값은 최댓값보다 작아야 합니다.');
  let num = Math.round(Math.random() * (max-min) + min);
  return num;
};

console.log(getRandomMinMax(3, 5));

/* 진법 ------------------------------------------------------------------ */

// 16진수 0x
//  8진수 0o
//  2진수 0b

// parseInt(string, base) → 진수 2 <= base <= 36
// number.toString(base) → base 진수 변환 후 문자 값 반환


/* 컬러 변환 -------------------------------------------------------------- */

const colorChip = {
  red: 207,
  green: 102,
  blue: 13,
};

// colorChip의 red, green, blue 값을 변환해봅니다.

// 1. 10진수 → 16진수 변환하기

// 2. 16진수 → 10진수 변환하기