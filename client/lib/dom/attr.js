
// get, set 함수 통일
// get 함수 만들기 -> set 함수 만들기 => common 함수 만들기

function getAttr(node, value){
  if(typeof node === 'string') node = getNode(node);
  return node.getAttribute(value);
}

// console.log(getAttr('.first', 'class'));
// 함수를 만들 때는 이 호출부를 먼저 써서 뭘 전달해줄지 결정해주는게 좋음!


function setAttr(node, prop, value) {
  if(typeof node === 'string') node = getNode(node);
  if(typeof prop !== 'string') throw new TypeError('settAttr 함수의 두 번째 인자는 문자 타입 이어야 합니다.')

  if(prop.includes('data')){
    let rest = prop.slice(5);
    node.dataset[rest] = value;
  }

  if(!value) throw new SyntaxError('setAttr 함수의 세 번째 인자는 필수값입니다.')

  node.setAttribute(prop, value);   // return 필요없음, setting만 하고자하므로
}



// get, set 통합

function attr(node, prop, value) {
  if(!value) return getAttr(node, prop);
  else setAttr(node, prop, value);

  // 삼항연산자
  // return !value ? getAttr(node, prop) : setAttr(node, prop, value);
}

// 화살표함수
// const attr = (node, prop, value) => !value ? getAttr(node, prop) : setAttr(node, prop, value);