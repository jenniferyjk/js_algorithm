
/*
문자열 n개가 주어집니다. 이 각각의 문자열들을 유일하게 구분할 수 있는 접두어의 최소 길이를 구하는 함수, solution을 완성해주세요.
예를 들어, 문자열의 배열 arr가 ['a', 'ab', 'def', 'dec', 'efgh'] 일 때, 각각의 문자열을 유일하게 구분할 수 있는 접두어의 최소 길이는 3입니다.

접두어의 길이가 1이면, ['a', 'a', 'd', 'd', 'e']로 유일하게 구분할 수 없습니다.
접두어의 길이가 2이면, ['a', 'ab', 'de', 'de', 'ef']로 유일하게 구분할 수 없습니다.
접두어의 길이가 3이면, ['a', 'ab', 'def', 'dec', 'efg']로 유일하게 구분할 수 있습니다.
결과 3
*/

const input = ['a', 'ab', 'def', 'dec', 'efgh'];

function solution(arr) {

    //가장 긴 문자열의 길이를 저장하기
    let val = 0;

    for (let i=0; i<arr.length; i++) {
        if (arr[i].length > val) {
            val = arr[i].length;
        } else {
            continue;
        }
    }

    //첫번째반복 : 문자열 길이를 늘려가며 비교군 만들기
    for (let i=1; i<=val; i++) {
        let starts = [];
        
        //두번째 반복 : 각 요인의 i번째 글자까지를 front에 저장하고 starts에 넣기
        for (let j=0; j<i; j++) {
            let front = '';
            
            for (let k=0; k<arr.length; k++) {
                arr[k]
            }
        }
    }

    
}

console.log(solution(input));