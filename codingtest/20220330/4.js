
/*0 ~ N 까지 수를 나열했을때 숫자 K가 몇번이나 등장하는지 확인하는 함수를 구현하세요.

K의 등장 횟수이기 때문에 K가 1인 경우 111에서는 1이 3번 등장했고 결과에 3을 합해야 합니다.

[입력]
양의 정수 N, 0~9 사이의 정수 K */

const inputN = 25;
const inputK = 2;

function solution(N, K) {

    // 0~N까지 수를 나열하기 (배열)
    let arr = [];
    K = K.toString();

    for (let i=0; i<=N; i++) {
        arr.push(i);
    }

    // 배열 안 각 수를 분리하기

    for (let i=0; i<arr.length; i++) {
        arr[i] = arr[i].toString().split('');
    }

    // 이차원 배열 안의 K의 횟수를 반복으로 구하기
    let count = 0;

    for (let i=0; i<arr.length; i++) {
        let len = arr[i].length;

        for (let j=0; j<len; j++) {
            if (arr[i][j] == K) {
                count += 1;
            } else {
                continue;
            }
        }
    }

    return count;
}

console.log(solution(inputN,inputK));