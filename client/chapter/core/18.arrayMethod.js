/* ---------------------------------------------------------------------- */
/* Array's Methods                                                        */
/* ---------------------------------------------------------------------- */

// Array.isArray
const arr = [10, 100, 1000, 10000];

// console.log(typeof arr);
// console.log(Array.isArray([]));

// 유틸함수 만들 수도 있음
function isArray(data) {
  return Object.prototype.toString.call(data).slice(8, -1).toLowerCase() === 'array'
}
function isNull(data) {
  return Object.prototype.toString.call(data).slice(8, -1).toLowerCase() === 'null'
}

// console.log(Array.isArray([]));



/* 요소 순환 -------------------------------------------------------------- */

// forEach
const user = {}

arr.forEach(function(item, index) {
  this[index] = item
}, user)  // 화살표 함수이기 때문에 this를 바인딩 하지 않음 -> 일반 함수로 바꿔줘야함


const span = document.querySelectorAll('span');

// span.forEach((item)=>{

//   item.addEventListerner('click', function() {
//     console.log(this);
//   })

// })


/* 원형 파괴 -------------------------------------------------------------- */

// push
// pop
// unshift
// shift
// reverse
// arr.reverse()

// splice
arr.splice(1, 0, 23, 5);
// console.log(arr);


// sort
arr.sort((a, b) => a-b);
console.log(arr);



/* 새로운 배열 반환 --------------------------------------------------------- */

// concat
// slice
// map
let todo = ['밥먹기', '미용실', '공부']

let template = todo.map((todoList)=>{
  return `<li>${todoList}</li>                                                     `
})

template.forEach((item) => {
  document.body.insertAdjacentHTML('beforeend', item);
})


let newArray = arr.map((item)=>item * 2)
// console.log(newArray);



/* 요소 포함 여부 확인 ------------------------------------------------------ */

// indexOf - 없는건 -1 반환
console.log( arr.indexOf(6) );

// lastIndexOf
// includes - 없으면 false
console.log( arr.includes(99) );




/* 요소 찾기 -------------------------------------------------------------- */
const users = [
  {id:1,name:'로운'},
  {id:2,name:'승택'},
  {id:3,name:'연주'},
]


// find - true인 하나를 찾으면 그 뒤는 검사 안함
const find = users.find((item, index)=>{
              return item.id < 3;
            })
console.log(find);

// findIndex
const findIndex = users.findIndex((item)=>{
  return item.id === 3;
})

console.log(findIndex);



/* 요소 걸러내기 ----------------------------------------------------------- */

// filter

let result = arr.filter((number)=>{
  return number < 100;
})

console.log(result);



/* 요소별 리듀서(reducer) 실행 ---------------------------------------------- */

const friends = [
  {
    name: '윤보라',
    age: 28,
    job: '작꼬져',
  },
  {
    name: '이로운',
    age: 23,
    job: '배고픈 개발자',
  },
  {
    name: '오승택',
    age: 21,
    job: '물음표살인마',
  }
];


// reduce

let totalAge = friends.reduce((acc, cur)=> acc + cur.age, 0)  // 초기값을 설정해주지 않으면 객체가 반환됨(friends가 객체이므로)

let template2 = todo.reduce((acc, cur, index)=>{    // 이거 React 가면 많이 씀
  return /* html */ acc + `<li>할 일 ${index + 1} : ${cur}</li>`
}, '')

console.log(template2);

console.log(totalAge);

// reduceRight



/* string ←→ array 변환 ------------------------------------------------- */

let str = '성찬 보경 이범 세민 형진 주현';

// split
let nameArray = str.split(' ');

console.log(nameArray);

// join
console.log(nameArray.join(' / '));