
/*SNS에서 서로가 팔로우를 했다는 것을 '맞팔'이라고 표현합니다.
다음 팔로우 관계를 나타낸 배열을 통해 서로 맞팔 관계인 쌍의 수를 리턴하는 함수를 작성하세요.

이때 ["철수", "영희"] 라는 정보는 철수가 영희를 팔로우 했음을 나타냅니다.

[입력]
팔로우 관계가 표현된 String 2차원 배열 A.

[출력]
맞팔 관계인 쌍의 수 */

const input = [["철수", "영희"], ["영희", "진수"], ["진수", "동수"], ["진수", "진호"]];

function solution(A) {
  //쌍의 수 카운트 변수
  var answer = 0;

  // 첫번째 반복 : 비교군 고정
  for (let i=0; i<A.length-1; i++) {
    let reverse = A[i].reverse();

    for (let j=i+1; j<A.length; j++) { //인덱스 변수 주의
      if (reverse == A[j]) {
        answer += 1;
      }else {
        continue;
      }
    }
  }
  return answer;
}

console.log(solution(input));