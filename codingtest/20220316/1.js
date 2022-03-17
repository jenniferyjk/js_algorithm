/*선생님이 조회 시간에 출석부를 부르고 있습니다.
학생들의 번호를 다 호명하고 결석한 학생들을 알아내고 있습니다.
선생님은 헷갈려서 몇 명의 번호를 다른 번호로 호명했습니다.
이때, 선생님이 잘못 호명한 학생들의 원래 번호를 출력하는 함수, solution을 완성해주세요.

예를 들어, 선생님이 호명한 학생들의 번호 배열 nums가 [1, 2, 3, 4, 6, 6, 6] 있을 때 
잘못 호명한 학생들의 원래 번호는 [5, 7]입니다. */


const nums = [1, 2, 3, 4, 6, 6, 6];


// 비교할 원래 배열 만들기
let attend = [];
for (let i=0; i<nums.length; i++) {
  attend[i] = i+1;
}

// 잘못 호명한 학생들 담기
let wrongCall = [];

for (let i=0; i<nums.length; i++) {
  if (attend[i] != nums[i]) {
    wrongCall.push(attend[i]);
  }else {
    continue;
  }
}

console.log(wrongCall);