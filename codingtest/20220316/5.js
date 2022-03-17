
/*정수가 들어있는 배열 A가 주어질 때 연속 합이 가장 큰 수열의 합을 반환하는 함수를 작성하세요.
만약 가장큰 합이 음수인 경우에는 0으로 반환하세요.

예를들어 배열 A에 [2, -8, 3, -2, 4, -10] 이 들어있는 경우 3 -2 4 를 선택했을 때 값이 5로 가장 큰 값이 나온다. */

const A = [2, -8, 3, -2, 4, -10];

function solution(A) {
  // 최대 합을 저장할 변수 선언
  let gst = A[0];

  
  for (let i=1; i<A.length; i++) {
    if(A[i-1] > 0 && A[i] + A[i-1] > 0) {
      A[i] += A[i-1];
    }

    if (gst < A[i]) {
      gst = A[i];
    }
  }

  if (gst < 0) {
    return 0;
  }else {
    return gst;
  }
}

console.log(solution(A));