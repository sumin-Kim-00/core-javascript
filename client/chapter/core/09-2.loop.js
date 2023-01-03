/* ---------------------------------------------------------------------- */
/* Do While Loop                                                          */
/* ---------------------------------------------------------------------- */

/* let i = +prompt("순환 횟수를 입력하세요: ");

do {
  console.log(i);
  if (i < 0) {
    console.log(
      "최초 실행된 메시지입니다. 이 메시지는 조건이 거짓이어도 볼 수 있습니다."
    );
    break;
  }
  i--;

*/

const frontEndDev = [
  "HTML",
  "CSS",
  "SVG",
  "JavaScript",
  "jQuery",
  "React",
  "Redux",
];

// do ~ while 문 (역순환)
// - prompt 창을 띄워 사용자로 하여금 순환 횟수를 요청
// - 사용자로부터 요청된 횟수 만큼 역방향으로 순환 출력
// - 사용자로부터 요청된 횟수가 0보다 작을 경우,
//   '최초 실행된 메시지입니다. 이 메시지는 조건이 거짓이어도 볼 수 있습니다.' 출력
// - 순환 중단

// do ~ while 문 (순환)
// - 위 do ~ while 문을 순방향으로 순환되도록 설정

let first = document.querySelector(".first");
let second = document.querySelector(".second");

// 재사용을 위해 함수로 만듦

function next(node) {
  do {
    node = node.nextSibling;
  } while (node.nodeType !== document.ELEMENT_NODE);
  return node;
}

function prev(node) {
  do {
    node = node.previousSibling;
  } while (node.nodeType !== document.ELEMENT_NODE);
  return node;
}

// console.log(prev(second));
// next(first);

// console.log(first.nextSibling); // 이렇게 한번하면 first와 second 사이의 공백이 선택됭
// console.log(first.nextSibling.nextSibling); // 이렇게 해야 second 접근가능
// 하지만 중간에 주석 등이 있거나 하면 끝없는 nextSiblink이 될 수 있음
