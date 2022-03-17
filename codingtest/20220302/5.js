/*문자열에 연속한 2개의 같은 문자가 존재하지 않도록 만들고 싶습니다. 
연속한 2개의 같은 문자가 존재한다면 이 문자를 지우고 남은 문자열을 이어 붙입니다.
 이 과정을 연속한 2개의 같은 문자가 없을 때까지 반복하면 목표한 문자열을 얻게 됩니다.

문자열 s가 주어질 때, 위와 같은 과정을 적용해서 나오는 문자열을 출력하는 함수, solution을 완성해주세요. */


const str = 'aacddefg';

let str_arr = str.split("");

console.log(str_arr);

for (let i=1; i<str_arr.length-1; i++) {
  if (str_arr[i] == str_arr[i-1]) {
    str_arr[i] = 0;
    str_arr[i-1] = 0;
  }
};

console.log(str_arr);

for (let i=0; i<str_arr.length; i++) {
  if(str_arr[i] === 0) {
    str_arr.splice(i,1);
  }
}

let result = str_arr.join('');

console.log(str_arr);
console.log(result);