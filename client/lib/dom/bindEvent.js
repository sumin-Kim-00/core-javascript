function bindEvent(node, type, handler) {

  if(typeof node === 'string') node = getNode(node);

  // 유효한 이벤트 타입인지를 체크(여기에 해당하는 이벤트가 아니면 에러 표시함)
  // g 플래그 - 전역에서 찾음
  // .test는 이게 들어있으면 true, 아니면 false를 반환하는 유틸함수
  if(!(/mouseenter|click|mousemove|mouseleave/g.test(type))){
    typeError('bindEvent 함수의 두 번째 인자는 유효한 이벤트 타입 이어야 합니다.')
  }

  node.addEventListener(type, handler)

  // 이렇게 하면 bindEvent를 받는 변수는 이벤트를 취소할 수 있는 함수가 됨
  return () => node.removeEventListener(type, handler);
}
