/* ---------------------------------------------------------------------- */
/* Event Handling                                                         */
/* ---------------------------------------------------------------------- */


/* 이벤트 핸들링 3가지 방법 --------------------------------------------------- */

// 1, 2는 잘 안써서 안할거임

// 1. HTML 속성 : onclick="handler()"
// 2. DOM 프로퍼티 : element.onclick = handler
// 3. 메서드 : element.addEventListener(event, handler[, phase])


/* 이벤트 추가/제거 --------------------------------------------------------- */

const first = getNode('.first');
const second = getNode('.second');
const ground = getNode('.ground');
const ball = getNode('.ball');



function handler() {
  console.log('hit !');
  // css('.second', 'display', 'none')
}

first.addEventListener('click', handler)




// const off = bindEvent('.first', 'click', handler)

// bindEvent('.first', 'click', off)

// - addEventListener
// - removeEventListener



ground.addEventListener('click', function(e) {
  console.log(e.offsetX, e.offsetY);

  ball.style.transform = `translate(${e.offsetX - ball.offsetWidth / 2}px, ${e.offsetY - ball.offsetHeight / 2}px)`
  // 공의 원래 넓이, 높이값의 /2 한만큼을 빼줘서 공이 마우스 가운데에 오도록 만들어줌
})

ground.addEventListener('mousemove', function(e) {
  console.log(e.offsetX, e.offsetY);

  // let posX = e.offsetX;
  // let posY = e.offsetY;

  // const emotion = /* html */ `<div class="emotion" style="left:$" ` 
})


