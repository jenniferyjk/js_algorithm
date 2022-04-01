/*
총 4가지 종류의 괄호가 있습니다.
각 괄호들은 서로 짝이 있으며 그짝은 괄호가 열리고 닫히는 것을 의미합니다.

'(' ')', '{' '}', '[' ']', '<' '>'

이때 주어진 스트링 S가 괄호가 서로 교차하지 않은 형태로 짝이 잘 맞게 이루어진 문자열인지 판단하는 함수를 작성하세요.

괄호가 서로 교차하지 않고 짝이 잘 맞게 이루어진다면 1
그렇지 않으면 0을 리턴
*/


const input = "(()){[<>]}";

function solution(S) {
    const opener = ['(' , '{' , '[' , '<'];
    const closer = [')' , '}' , ']' , '>'];

    //문자열을 배열로 나누기
    S = S.split('');

    let status = 1; //상태를 나타내기

    let stack = [];

    for (let i=0; i<opener.length; i++) {
        for (let j=0; j<S.length; j++) {
            if (opener[i] == S[j]) {
                stack.push(opener[i]);
            } else {
                continue;
            }
        }
    }

    return ;
}

console.log(solution(input));

