/* ---------------------------------------------------------------------- */
/* Data Types                                                             */
/* ---------------------------------------------------------------------- */

/* ECMAScript의 8가지 데이터 타입 -------------------------------------------- */

// 1. 존재하지 않는(nothing) 값 / 비어있는(empty) 값 / 알 수 없는(unknown) 값
console.log(typeof null);

// 2. 값이 할당되지 않은 상태
console.log(typeof undefined);

// 3. 따옴표를 사용해 묶은 텍스트(큰", 작은', 역`)
let message1 = "hello";
let nickName = "Sumin";
let message3 = `안녕 내 이름은 ${nickName} 이야. ${message1} `;

console.log(message3);

// 4. 정수, 부동 소수점 숫자(길이 제약)
let number = 100.123;

console.log("number:", number);
console.log(typeof number);

// 5. 길이에 제약이 없는 정수(예: 암호 관련 작업에서 사용)
// bigInt는 bigInt끼리 계산해야함
let bigNum = 12912n;

console.log("bigInt:", bigNum + 123n);
console.log(typeof bigNum);

// 6. 참(true, yes) 또는 거짓(false, no)
console.log(typeof true);

// 7. 데이터 컬렉션(collection) 또는 복잡한 엔티티(entity)
// 객체는 중괄호로 표현
console.log(typeof {});

// 8. 고유한 식별자(unique identifier)
console.log(Symbol("id"));

console.log(typeof Math);

const fuc = function () {};

console.log(typeof fuc);

/* typeof 연산자의 2가지 사용법 ---------------------------------------------- */

// 1) 연산자 typeof
// 2) 함수 typeof()

// 언어 상, 오류

// Object - key와 value의 잡합
const user = new Object(); // 생성자 함수
user.age = 23;
user.name = "K";

//근데 이건 불편해서 그냥 괄호로 많이함
const user2 = {
  name: "S",
  age: 24,
  fish: function () {
    return "뻐끔뻐끔";
  },
};

// Array
let list = [1, 100, 1000];
console.log(list);

// function
// 리턴 값이 없으면 무조건 undefined
function sum(a, b) {
  return a + b;
}

console.log(sum(2, 3));

let sum2 = 0;
for (let i = 0; i < list.length; i++) {
  sum2 += list[i];
}

console.log(sum2);

// this
