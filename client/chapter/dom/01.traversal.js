/* ---------------------------------------------------------------------- */
/* DOM traversal                                                          */
/* ---------------------------------------------------------------------- */


/* 모든 노드에서 사용 */
// - parentNode
// - childNodes
// - firstChild
// - lastChild
// - previousSibling
// - nextSibling

/* 요소 노드에서만 사용 가능 */
// - parentElement
// - children
// - firstElementChild
// - lastElementChild
// - previousElementSibling
// - nextElementSibling

/* 문서 대상 찾기 */
// - getElementById
// - getElementsByTagName
// - getElementsByClassName
// - querySelector
// - querySelectorAll
// - closest


// let first = document.querySelector('.first');

let [first, second] = document.querySelectorAll('span')    // 구조 분해 할당

// let first = span[0];
// let second = span[1];


console.log(getNode('.first'));



/* 문서 대상 확인 */
// - matches : 이 대상에 이게 있어?
// - contains : 부모 안에 이 자식이 있어?

//         선택자 안에 class || id를 가지고 있는 대상이 있어?
console.log(getNode('.first').matches('.first'));

//         선택자의 자식들 중에 해당 element가 있어?
console.log(getNode('h1').contains(getNode('.first')));