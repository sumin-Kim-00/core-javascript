/* ---------------------------------------------------------------------- */
/* Logical Operators                                                      */
/* ---------------------------------------------------------------------- */
let age = 24;

if (age >= 14 && age <= 90) {
  console.log("나이에 속합니다.");
} else {
  console.log("나이에 속하지 않습니다.");
}

/* 로그인 구현하기 */

let userName = prompt("이름을 입력하세요: ");
let pw;

if (userName?.toUpperCase() === "ADMIN") {
  pw = prompt("비밀번호를 입력하세요");
  if (pw?.toLowerCase() === "themaster") {
    console.log("환영합니다!");
  } else {
    console.log("비밀번호가 틀렸습니다.");
  }
  // 모든 공백을 찾아서 빈 문자로 바꾸겠다. 하는 정규표현식
} else if (userName.replace(/\s*/g, "") === "" || userName === null) {
  console.log("취소되었습니다.");
} else {
  console.log("아이디가 맞지 않습니다.");
}

//if (age < 14 && age > 90)

let a = 10;
let b = "";
let value = Boolean(b);

// 논리곱(그리고) 연산자
let AandB = a && b;

// 논리합(또는) 연산자
let AorB = a || b;

// 부정 연산자
let reverseValue = !value;

// 조건 처리

// 첫번째 Falsy를 찾는 연산 (&&)
let whichFalsy = true && " " && [] && { thisIsFalsy: false };

// 첫번째 Truthy를 찾는 연산 (||)
let whichTruthy = false || "" || [2, 3].length || { thisIsTruty: true };
