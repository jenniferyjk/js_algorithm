
/*주어진 두개의 수의 소인수 분해 했을때 공통된 소수의 집합을 가지고 있는지 판단하는 함수를 작성하세요.

예를들어 12, 6 은 두 수 모두 2와 3으로만 이루어져 공통된 소수 집합을 가지고 있습니다.
9, 18의 경우 9는 3으로 이루어져 있으며, 18은 2, 3으로 이루어져 있기 때문에 공통 소수 집합이 아닙니다.

[입력]
1 ~ 10000 사이의 정수 A, B

[출력]
공통된 소수 집합인 경우 1, 아니면 0 */


// 두개의 정수에 동일한 방법 적용 필요 -> 함수 생성
// 소인수분해 함수 만들기
function findPrimeFactors(n) {
  let primeFactor = [];

  let i = 2;

  while(true) {
    if (n%i == 0) {
      primeFactor.push(i);
      n = n/i;
    }
    i++ ;
    if (i > n) {
      break;
    }
  }

  return primeFactor;
}

console.log(findPrimeFactors(12), findPrimeFactors(6));


/* function solution(A, B) {
  var answer = 0;

  const aPrime = findPrimeFactors(A).join(' ');
  const bPrime = findPrimeFactors(B).join(' ');

  if(aPrime == bPrime) {
    answer = 1;
  }
  
  return answer;
} */