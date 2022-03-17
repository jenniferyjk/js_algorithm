
/*민주를 위해 키가 주어지면 순서대로 제대로 섰는지 확인하는 프로그램을 작성해보자. */

const input = '176 156 155 165 166 169'

//기본과 대조군 나누기

let sorted = '';

sorted = input.split(' ').sort(function(a, b) {
  return a - b;
}).join(' ');

if ( input === sorted ) {
  console.log('YES');
}else {
  console.log('NO');
}
