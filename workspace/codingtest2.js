/* 바이너리 값을 줍니다.
이때, 바이너리 값 중 연속된 1의 최대 길이를 구하는 함수, solution을 완성해주세요.

예를 들어 바이너리 값 arr [1, 0, 1, 1, 1, 0] 이 주어질 때, 결과는 3입니다.*/

const arr = [1, 0, 1, 1, 1, 0]
let count = 0;
let gst = 0;

for (let i = 0; i<arr.length; i++) {
  if (arr[i] == 1) {
    count += 1;
  } else if (arr[i] == 0){
    if (count > gst) {
      gst = count;
      count = 0;
    } else {
      count = 0 ;
    }
  }
}

// console.log(count);
console.log(gst);


/*돌로 만들어진 징검다리를 건너려고 합니다.
징검다리 bridge는 돌을 나타내는 1과 돌이 없음을 나타내는 0의 배열로 이루어져 있습니다
최대 멀리 뛸 수 있는 jumpSize가 주어질 때 다리를 건널 수 있는지를 출력하는 함수, solution을 완성해주세요.

예를 들어, 징검다리 bridge가 [1, 0, 1, 0, 0, 1]이고, jumpSize가 2일 때, 결과는 true입니다.

*/

const bridge = [1, 0, 1, 0, 0, 1];
const jumpSize = 2 ;

let len = 0;
let state = true;

for (let i = 1; i<bridge.length; i++) {
  if (bridge[i] == 0) {
    len += 1;
  } else if (bridge[i] == 1) {
    if (len > jumpSize) {
      state = false;
      break;
    } else {
      len = 0;
      continue;
    }
  }
}

console.log(state);




/* 재난 지원금을 지급하기 위해 국민의 평균 소득액을 구하려고 합니다.
국민의 소득을 그대로 평균 내면 잡음이 심하여, 
최상위 최하위 1건씩 제외한 소득 평균을 출력하는 함수, solution을 완성해주세요.
예를 들어, 국민의 소득액 arr가 [1, 3, 3, 3, 5]일 때, 최상위 최하위 1건씩 제외한 소득 평균은 3입니다.
 */

const array = [1, 5, 3, 3, 3]

array.sort();

let sum = 0;
let count2 = 0;

for (let i=1; i<array.length-1; i++) {
  sum = sum + array[i];
  count2 += 1;
}

let avg = sum/count2;

avg = parseInt(avg);

console.log(avg);
