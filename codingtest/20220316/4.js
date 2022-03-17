
/*문자열 S는 2진수로 표현된 양의 정수입니다.

해당 정수에 아래의 연산을 수행합니다.

만약 숫자가 짝수인 경우 해당 값의 2를 나눈다.
만약 숫자가 홀수인 경우 1을 뺀다.

연산의 결과가 0이 될때까지 반복해서 수행했을 때 수행된 연산 횟수 N을 구하는 함수를 작성하세요. */


const S = "1101";

function solution(S) {
  // 이진수 S를 십진수로 변환하기
  let sDcm = parseInt(S, 2);
  
  // 연산 결과가 0이 될때까지 반복하고, 반복횟수를 N에 저장하기
  let N = 0;

  while (sDcm >= 0) {
    if (sDcm == 0) {
      return N;
    }else if (sDcm != 0 && sDcm%2 == 0) { //짝수
      sDcm = sDcm/2 ;
      N += 1;
    }else if (sDcm !=0 && sDcm%2 !=0) { //홀수
      sDcm = sDcm - 1 ;
      N += 1;
    }
  }

}

console.log(solution(S));

