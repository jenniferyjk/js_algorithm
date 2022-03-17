
/*한 줄에 여러개의 숫자가 입력되면, 역순으로 그 숫자들을 하나씩 출력하는 프로그램을 작성하시오. */

const input = '1 2 3 4 5';

const reverseNums = input.split(' ').reverse().join(' ');

console.log(reverseNums);


// 다른 풀이 (반복문 활용하기)

const input2 = '2 4 6 8 10';
const data = input2.split(' ').reverse();
let result = '';

for (let i=0; i<data.length; i++) {
  result += data[i];
}

console.log(result);