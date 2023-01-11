/* ---------------------------------------------------------------------- */
/* DOM Styling                                                            */
/* ---------------------------------------------------------------------- */

const first = getNode('.first');

/* 클래스를 관리할 수 있게 해주는 DOM 프로퍼티 ------------------------------------ */

// - className – 클래스 전체를 문자열 형태로 반환해주는 프로퍼티로 클래스 전체를 관리할 때 유용
// - classList – 클래스 하나를 관리할 수 있게 해주는 메서드로 개별 클래스를 조작할 때 유용

// console.log(first.className = 'hola');
// first.classList.add('hello')
// first.classList.remove('hello')
// first.classList.toggle('hello') // toggle - 있으면 없애주고 없으면 생성시켜줌



// addClass('.first', 'hello')
// removeClass('.first', 'hello')


// removeClass('.first')   // 이렇게 하면 first가 가지고 있는 class 다 없앰



/* 스타일 변경 방법 --------------------------------------------------------- */

// - style.cssText - "style" 속성 전체에 대응하므로 스타일 전체에 대한 문자열 저장

// first.style.backgroundColor = 'red'
// first.style.marginLeft = '30px'
// first.style.transform = 'rotate(360deg)'


/* 계산된 스타일 읽기 ------------------------------------------------------- */

// let size = getComputedStyle(first).fontSize;

// console.log(size);

// - getComputedStyle(element, [pseudoElement]) `읽기 전용`


// console.log(getCss('.first', 'font-size'));
// setCss('.second', 'transform', 'rotate(360deg)');

// css('.first', 'font-size');
// css('.first', 'font-size', '100px');