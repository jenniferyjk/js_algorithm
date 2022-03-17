/*문장이 입력되면 거꾸로 출력하는 프로그램을 만들어 봅시다. */

const sentence = '거꾸로 출력하기';

let answer = '';

for (let i=sentence.length-1; i>=0; i--) {
  answer += sentence[i];
}

console.log(answer);



// 다른 답안 (메서드 사용)
const s = '거꾸로 출력하기';

const reverseString = s.split('').reverse().join('');
/*
split('') : 구분자('')를 기준으로 문자열을 배열의 요소로 나누기
reverse() : 배열의 순서를 반전함
join('') : 구분자('')를 기준으로 배열의 요소를 문자열로 합치기
*/
console.log(reverseString);