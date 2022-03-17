/*정수 n이 주어질 때, n보다 작거나 같은 수 중 가장 큰 세제곱 수를 출력하는 함수, solution을 완성해주세요.

예를 들어, 정수 n이 15일 때, 결과는 8입니다. */


const n = 15;
let max=0;

for (let i=1; i<=n; i++) {
  if(Math.pow(i,3) <= n) {
    max = (Math.pow(i,3));
  } else if (Math.pow(i,3) > n) {
    break;
  }
}

console.log(max);