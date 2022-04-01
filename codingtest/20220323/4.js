
/*
0 ~ 100까지의 숫자가 적혀있는 카드가 있습니다.
해당 카드를 뽑은 순서에 따라 아래 규칙에 의거해 점수를 책정합니다.

뽑은 카드의 숫자와 현재 까지 뽑은 카드의 수를 곱한다.
짝수번째로 뽑은 카드의 경우 -1을 더 곱한다.
배열 A에 뽑은 카드의 리스트가 제공될때 해당 카드들이 규칙에 따라 나올수 있는 가장 큰 점수가 몇점인지 구하는 함수를 작성하세요.
*/

const input = [1, 2, 3, 4, 5];
const input2 = [1, 2, 3, 4, 5, 6];

// [3,2,4,1,5] 
// 3-4+12-4+25 
// 32
// [4, 3, 5, 2, 6, 1]

function solution(A) {
    const num = parseInt(A.length / 2) ;

    //가장 작은수들을 역순으로 음수 곱하기 대상으로
    let neg = A.splice(0,num).sort(function(a, b) {
        return b - a ;
    });

    //결과를 저장할 변수
    let result = 0;
    let sum = 0;
    let sub = 0;

    // 양수 더하기
    for (let i=0; i<A.length; i++) {
        sum = sum + (A[i] * ((2*i)+1));
    }

    // 음수 빼기
    for (let i=0; i<neg.length; i++) {
        sub = sub - (neg[i] * (-2*(i+1)));
    }
    
    result = sum - sub;

    return result;
}

console.log(solution(input));
console.log(solution(input2));
