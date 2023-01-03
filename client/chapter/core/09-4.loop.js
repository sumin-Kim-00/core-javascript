/* ---------------------------------------------------------------------- */
/* For In Loop                                                            */
/* ---------------------------------------------------------------------- */

const javaScript = {
  creator: "Brendan Eich",
  createAt: "1995.05",
  standardName: "ECMAScript",
  currentVersion: 2022,
  hasOwnProperty: function () {
    return "헤헤";
  },
};

let key = "valueOf";
// console.log(key in javaScript);

// 객체의 속성(property) 포함 여부 확인 방법
// - 모든 객체가 사용 가능하도록 속성이 확장되었을 때 포함 여부 결과는?

// hasOwnProperty
// 객체 자신(own)의 속성(property)인지 확인(has)하는 방법

// console.log(javaScript.hasOwnProperty(key));
Object.prototype.nickName = "Sumin";

// - "자신의 속성을 가지고있는지 확인 방법"이 덮어쓰여질 수 있는 위험에 대처하는 안전한 방법은?
console.log(Object.prototype.hasOwnProperty.call(javaScript, key)); // 객체의 hasOwnProperty 능력을 빌려쓰는 방법

// for ~ in 문
// - 객체 자신의 속성만 순환하려면?

// Object.prototype 은 {} 얘와 똑같음!!
// 그래서 {}.prototype.hasOwnProperty.call(javaScript, key)  이렇게 써도 됨!
for (let key in javaScript) {
  if (Object.prototype.hasOwnProperty.call(javaScript, key)) {
    // 능력을 빌려서 진짜 그 객체 안에 있는 키 들만 출력해줘
    console.log(key);
  }
}

// - 배열 객체 순환에 사용할 경우?
// 배열도 Object 이기 때문에 그 속성들을 다 쓸 수 있음
// 근데 배열에는 for in 안쓰는게 좋음, 성능상 안좋음
// 그래서 배열을 순환할 때는 for of를 씀

let tens = [10, 100, 1000, 10000];

for (let value in tens) {
  if ({}.hasOwnProperty.call(tens, value)) {
    console.log(tens[value]);
  }
}

// call 사용 예제(매개변수를 안쓰고 this를 바꿔줌)
function hello() {
  console.log(this);
}

hello.call("aaa");
