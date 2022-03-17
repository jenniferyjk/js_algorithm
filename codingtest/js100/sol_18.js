/*공백으로 구분하여 세 과목의 점수가 주어지면 전체 평균 점수를 구하는 프로그램을 작성하세요. 
단, 소숫점 자리는 모두 버립니다. */

const scores = '20 30 40';
const scores_arr = scores.split(' ');

let sum = 0;

for (let i=0; i<3; i++) {
  sum += parseInt(scores_arr[i]);
}

const avg = sum / scores_arr.length;
console.log(avg);


//다른 답안
const sc = '20 30 40';
const sc_arr = sc.split(' ');
let sum2 = 0;

for (let i=0; i<3; i++) {
  sum2 += parseInt(sc_arr[i], 10); //parseInt(obj, 진수) -> n진수 형태의 숫자로 데이터 타입 변환
}

console.log(Math.floor(sum2/3)); 
//Math.floor() -> 숫자 요소의 소수점 자리를 모두 버림