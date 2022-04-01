
/*새 학기를 맞아 호준이네 반은 반장 선거를 하기로 했습니다.  
그런데 표를 하나씩 개표하는 과정이 너무 번거롭게 느껴진 당신은 
학생들이 뽑은 후보들을 입력받으면 뽑힌 학생의 이름과 받은 표 수를 출력하는 프로그램을 작성하기로 하였습니다. */

const input = '원범 원범 혜원 혜원 혜원 혜원 유진 유진'

let array = input.split(' ');
let count = {};

for (index in array) {
    let val = array[index];
    
    if (count[val] === undefined) {
        count[val] = 1;
    }else {
        count[val] += 1;
    }
}

let max = Object.keys(count).reduce(function(a, b) {
    return count[a] > count[b] ? a:b
});

console.log(max);

