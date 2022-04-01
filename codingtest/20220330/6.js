
/*문자열 S는 하나의 단어를 나타냅니다.
단어를 거꾸로 뒤집어도 똑같은 것을 회문이라고 합니다.

주어진 단어가 회문인경우 1, 아닌경우 0을 리턴하는 함수를 구현하세요. */

const input = "MAMA";

function solution(S) {

    // 문자열 분리하기 (배열)
    const arrS = S.split('');

    // 반대 순서 배열 만들기
    const revS = [...arrS].reverse();

    // 상태를 나타내는 변수를 만들고 반복으로 배열 비교하기

    let status = 1;

    for (let i=0; i<arrS.length; i++) {
        if (arrS[i] != revS[i]) {
            status = 0;
            break;
        } else {
            continue;
        }
    }

    return status;
}

console.log(solution(input));