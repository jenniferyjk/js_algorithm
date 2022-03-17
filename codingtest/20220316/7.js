
/*배열 A에는 0 ~ 1000사이의 숫자가 랜덤하게 들어있습니다.
이 숫자들이 2진수로 변환되었을 때 가지고 있는 1의 개수에 따라 오름차순 정렬하는 함수를 작성하세요.
단, 1의 개수가 같은 경우 숫자의 크기에 따라 오름차순 정렬을 합니다. */


const input = [1, 2, 3, 4];

function solution(A) {
  
  // 배열 요소 이진수 변환
  let bin = [];
  for (let i=0; i<A.length; i++) {
    bin.push(A[i].toString(2));
  }
  
  // bin 각 요소의 1의 개수 세기 + 개수를 담을 배열 선언
  let ones = [];
  let count = 0;
  for (let i=0; i<bin.length; i++) {

    for (let j=0; j<bin[i].length; j++) {
      if(bin[i][j] == '1') {
        count += 1;
      }
    }
    ones.push(count);
    count = 0;
  }


  // 오름차순 정렬하기 A=[1,2,3,4] ones=[1,1,2,1]
  let sorted = [];
  for (let i=0; i<A.length; i++) {
    if ()
  }
  return sorted;
}

console.log(solution(input));

