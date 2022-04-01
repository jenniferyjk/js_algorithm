
/*-10000 ~ 10000 사이의 숫자 N과 1 ~ 9 사이의 숫자 K가 주어집니다.
K를 N의 특정 자리에 넣어서 만들수 있는 숫자들 중 최대값을 구하는 함수를 작성하세요. */

const inputN = 278;
const inputK = 3;

function solution(N, K) {

    // N을 자리수별로 분리하기
    const arrN = N.toString().split('');
    K = K.toString();

    let result = '';

    // 양수일 때
    if (N >= 0) {
        for (let i=0; i<arrN.length; i++) { //[2, 7, 8]
            if (K >= arrN[i]) {
                arrN.splice(i,0,K);
                result = arrN.join('');
                break
            }else {
                continue;
            }
        }
    }

    result = parseInt(result);

    return result;

}

console.log(solution(inputN,inputK));