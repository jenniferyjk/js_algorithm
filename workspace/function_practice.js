
// 두 정수를 입력받아 가장 큰 값을 출력해주는 함수를 작성하시오

// 내 구현
function MAX(x, y) {
  if (x>y) {
    return x;
  } else {
    return y;
  }
}

// case 2
function MAX_2(x,y) {
  return x > y? x:y;
}


console.log(MAX(0,3));
console.log(MAX_2(100,7));