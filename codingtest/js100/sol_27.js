
/*첫번째 입력에서는 학생의 이름이 공백으로 구분되어 입력되고, 
두번째에는 그 학생의 수학 점수가 공백으로 구분되어 주어집니다.

두 개를 합쳐 학생의 이름이 key이고 value가 수학 점수인 객체를 출력해주세요. */

const input1 = 'Tom Andrew Tobey';
const input2 = '70 100 80';

const students = input1.split(' ');
const scores = input2.split(' ');

let math_scores = {};

for (let i=0; i<students.length; i++) {
  math_scores[students[i]] = scores[i];
}

console.log(math_scores);