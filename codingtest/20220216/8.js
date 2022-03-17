/*여러 개의 문장을 줍니다. 
이 중 가장 많은 단어를 가진 문장의 단어 수를 반환하는 함수, solution을 완성해주세요.

예를 들어, 여러 개의 문장 arr [Happy new year, Hello world, Nice to meet you]이 있을 때, 
가장 많은 단어의 수는 4입니다. */


const arr = ['Happy new year', 'Hello world', 'Nice to meet you'];
let gst = 0;

for (let i = 0; i<arr.length; i++) {
  let sentence = arr[i].split(" ");
  let len = sentence.length;
  
  if (len > gst) {
    gst = len;
  } else {
    continue;
  }

}

console.log(gst);