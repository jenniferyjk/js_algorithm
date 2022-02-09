

//예제1. for반복문을 이용하여 0~10까지 정수 중 짝수의 합을 구한 뒤 출력해주는 코드를 작성하시오

const UNTIL_NUM = 10;
let sum = 0;

for (let i = 0 ; i <= UNTIL_NUM ; i++) {
  if (i%2 == 0) {
    sum += i;
  } else {
    continue;
  }
}

console.log(sum);

//예제2. 이중 for문을 이용해 2~9단까지 출력해주는 코드 작성

for (let i = 2 ; i <= 9; i++) {
  for (let j =1 ; j <= 9 ; j++) {
    console.log(i + "x" + j + "=" + i*j)
  }
}