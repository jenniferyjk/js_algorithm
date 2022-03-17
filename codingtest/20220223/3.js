/*둘레가 가장 큰 삼각형을 구하려고 합니다.
N개의 정수로 만들 수 있는 둘레가 가장 큰 삼각형의 둘레를 구하는 함수, solution을 완성해주세요.

예를 들어, arr [3, 2, 3]이 주어질 때, 결과는 8입니다. */


const arr = [3,2,3];
let max = 0;

arr.sort(function(a,b) {
  return b-a;
})

