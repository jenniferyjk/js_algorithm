/*2진수를 학습하던 윤주는 색종이로 이를 표현하려고 합니다. 
2진수의 1은 붉은색 종이로, 0은 흰색 종이로 표현할 때, 
흰색 종이가 무수히 많은 윤주는 붉은색 종이를 얼마나 준비해야 하는지 궁금해졌습니다.
숫자 n이 주어질 때, 0부터 n까지 수를 색종이로 표현하려고 합니다. 
이때, 윤주가 준비해야 하는 붉은색 종이의 수를 구하는 함수, solution을 완성해주세요. */

const n = 3;
let sum = 0;

for (let i=0; i<=n; i++) {
  let bin = i.toString(2);
  let bin_arr = (bin+'').split('');
  let count = 0;

  for (let j=0; j<bin_arr.length; j++) {
    if (bin_arr[j] == '1') {
      count += 1;
    }else {
      continue;
    } 
  }
  sum = sum + count ;
}

console.log(sum);