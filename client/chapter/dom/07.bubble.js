/* ---------------------------------------------------------------------- */
/* Event bubbling & capturing                                             */
/* ---------------------------------------------------------------------- */


/* 버블링 ----------------------------------------------------------------- */

const visual = getNode('.visual');
const news = getNode('.news');
const desc = getNode('.desc');


visual.addEventListener('click', function(e){

  console.log('%c visual', 'background:lightpink');   // %c - css를 쓰겠다

  css('.pop', 'display', 'block')
})


getNode('.pop').addEventListener('click', (e)=>{
  // 버블링이 발생하기 때문에 이걸 눌러도 위에 visual 요것도 눌리니까 없어지지 않음
  // 그래서 이 메소드로 버블링을 멈춰서 pop 상자 눌렀을 때 없어지게 만듦
  e.stopPropagation();
  css('.pop', 'display', 'none');
})

// news.addEventListener('click', function(){
//   console.log('%c news', 'background:lightblue');   // %c - css를 쓰겠다
// })

// desc.addEventListener('click', function(e){
//   e.stopPropagation();    // 버블링 멈추는 메소드
//   console.log('%c desc', 'background:lightyellow');
// })

/* 캡처링 ----------------------------------------------------------------- */