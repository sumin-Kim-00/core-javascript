/* ---------------------------------------------------------------------- */
/* String Type                                                            */
/* ---------------------------------------------------------------------- */


function checkBrowser(browserName) {
  let browser;
  let ua = navigator.userAgent.toLowerCase();
  if (ua.indexOf("chrome") > -1) browser = "chrome";
  else if (ua.indexOf("edge") > -1) browser = "edge";
  else if (ua.indexOf("whale") > -1) browser = "whale";
  else if (ua.indexOf("safari") > -1) browser = "safari";
  else if (ua.indexOf("firefox") > -1) browser = "firefox";

  return browser === browserName;
}







let message = 'Less is more.';
// console.log(message);

// for(let key of message) console.log(key);

// length 프로퍼티
let stringTotalLength = message.length;
console.log('stringTotalLength',stringTotalLength);

// 특정 인덱스의 글자 추출
let extractCharacter = message[0];
console.log('extractCharacter',extractCharacter)

// 문자열 중간 글자를 바꾸는 건 불가능 -  message[3] = i;  이런거 안댐
// (기존 문자 변경 대신, 새로운 문자를 생성해야 함)
let immutableChangeCharacter;


// 부분 문자열 추출
let slice = message.slice(8, -1);   // 괄호에 아무것도 안넣으면 전제 문자열 나옴
                                    // 인자 하나만 넣으면 그 숫자부터 끝까지 출력
console.log('slice',slice)

let subString = message.substring(0, 8);
console.log('subString',subString)


// let subStr;   // 얘는 없어짐


// 문자열 포함 여부 확인
let indexOf = message.indexOf('i'); // i의 인덱스값 반환, 없는 문자를 넣으면 -1반환
console.log('indexOf',indexOf)

let lastIndexOf = message.lastIndexOf('s');   // 뒤에서부터 찾음?, 앤 잘 안쓰임
console.log('lastIndexOf',lastIndexOf)

let includes = message.includes('Less');
console.log('includes',includes)

let startsWith = message.startsWith('L');   // 첫글자가 얘 맞아?를 알아보기 위해 사용
console.log('startsWith',startsWith)

let endsWith = message.endsWith('L');   // 마지막 글자
console.log('endsWith',endsWith);



// 공백 잘라내기
let trimLeft = message.trimLeft();    // 왼쪽 공백 잘라냄, 삭선생기니까 요즘 안쓰임, pass~
console.log('trimLeft',trimLeft)
let trimRight;

let trim = message.trim();    // 앞뒤 공백(띄어쓰기 말고) 없어짐, 얘를 많이 씀
console.log('trim',trim)

// 띄어쓰기까지 다 없애기(정규표현식)
let m = message.replace(/\s*/g, '');
console.log('m',m)


// 텍스트 반복
let repeat = message.repeat(3);
console.log('repeat',repeat)


// 대소문자 변환
let toLowerCase = message.toLowerCase();
console.log('toLowerCase',toLowerCase);

let toUpperCase = message.toUpperCase();
console.log('toUpperCase',toUpperCase);


// 텍스트 이름 변환 유틸리티 함수
function toCamelCase(string) {
  return string.replace(/(\s|-|_)+./g, ($1) => $1.trim().replace(/(-|_)+/, '').toUpperCase())
}

function toPascalCase(string) {
  let name = toCamelCase(string);
  return name[0].toUpperCase() + name.slice(1);
}

console.log('CamelCase : ', toCamelCase('less-is-more'));
console.log('PascalCase : ', toPascalCase('less-is-more'));