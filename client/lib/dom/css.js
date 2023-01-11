function addClass(node, className){
  if(typeof node === 'string') node = getNode(node);

  if(node.nodeType !== document.ELEMENT_NODE) {
    throw new TypeError('insertBefore 함수의 첫 번째 인자는 ELEMENT 노드여야 합니다.');
  }
  if(typeof className !== 'string') typeError('addClass 함수의 두 번째 인자는 문자 타입 이어야 합니다.')
  
  node.classList.add(className);
}

function removeClass(node, className){
  if(typeof node === 'string') node = getNode(node);

  if(node.nodeType !== document.ELEMENT_NODE) {
    throw new TypeError('insertBefore 함수의 첫 번째 인자는 ELEMENT 노드여야 합니다.');
  }

  // className을 안넣으면 first가 가지고있는 class를 다 없애고 싶을때
  if(!className){
     node.className = "";
     return;  // 이미 처리를 해서 밑으로 더 진행되면 안되므로 리턴해줌
  }

  if(typeof className !== 'string') typeError('removeClass 함수의 두 번째 인자는 문자 타입 이어야 합니다.')

  node.classList.remove(className);
}

function toggleClass(node, className){
  if(typeof node === 'string') node = getNode(node);

  if(node.nodeType !== document.ELEMENT_NODE) {
    typeError('toggleClass 함수의 첫 번째 인자는 ELEMENT 노드여야 합니다.');
  }

  if(typeof className !== 'string') typeError('toggleClass 함수의 두 번째 인자는 문자 타입 이어야 합니다.')


  node.classList.toggle(className);
}



function getCss(node, prop){
  if(typeof node === 'string') node = getNode(node);

  if(typeof prop !== 'string') typeError('addClass 함수의 두 번째 인자는 문자 타입 이어야 합니다.')

  // cssName이 정확한 css 속성인지 어케알거?
  if(!(prop in document.body.style)) syntaxError('getCss 함수의 두 번째 인자인 prop은 유효한 속성이 아닙니다.')

  // jS에선 객체의 key, value 값을 변수로 받기 위해서는 .(점) 사용 불가
  // [] 각괄호 표기법 사용
  return getComputedStyle(node)[prop];
}



function setCss(node, prop, value){
  if(typeof node === 'string') node = getNode(node);
  
  if(typeof prop !== 'string') typeError('addClass 함수의 두 번째 인자는 문자 타입 이어야 합니다.')
  
  // cssName이 정확한 css 속성인지 어케알거?
  if(!(prop in document.body.style)) syntaxError('getCss 함수의 두 번째 인자인 prop은 유효한 속성이 아닙니다.')
  
  if(!value) syntaxError('setCss 함수의 세 번째 인자는 필수값 입니다.')
  
  node.style[prop] = value;
}



function css(node, prop, value) {
  if(!value) return getCss(node, prop);
  else setCss(node, prop, value);
  
  // return !value ? getCss(node, prop) : setCss(node, prop, value);
}