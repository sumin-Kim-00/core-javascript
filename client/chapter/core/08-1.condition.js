/* ---------------------------------------------------------------------- */
/* Condition                                                              */
/* ---------------------------------------------------------------------- */

let number = prompt("숫자를 입력해 주세요", 0);

/* if (number > 0) {
  console.log(1);
} else if (number == 0) {
  console.log(0);
} else if (number < 0) {
  console.log(-1);
} else {
  console.log("암것도 아닙니다.");
} */

let message =
  number > 0 ? 1 : number == 0 ? 0 : number < 0 ? -1 : "암것도 아닙니다.";

console.log(message);

// 그 영화 봤니?
//     ↓
// Yes | No
//     | 영화 볼거니?
//           ↓
//       Yes | No

// 영화 봤니?
let didWatchMovie = "yes";

// 영화 볼거니?
let goingToWatchMovie = "no";

if (didWatchMovie.includes("yes")) {
  console.log("그 영화 재밌지?!");
} else if (didWatchMovie === "no" && goingToWatchMovie === "yes") {
  console.log("같이가자ㅎㅎ!");
} else {
  console.log("재밌는뎅...보지,,,");
}

let movieMessage = didWatchMovie.includes("yes")
  ? "그 영화 재밌지??!"
  : didWatchMovie === "no" && goingToWatchMovie === "yes"
  ? "같이가자!"
  : "재밌는뎅...보지,,,";

// if 문(statement)

// else 절(caluse)

// else if 복수 조건 처리

// 조건부 연산자

// 멀티 조건부 연산자 식
