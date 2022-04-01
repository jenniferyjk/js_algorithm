
/*배열 A에는 0~9까지의 숫자가 랜덤하게 들어있습니다.
해당 배열의 숫자를 두개 뽑아 조합했을 때 K번째로 큰 숫자를 리턴하는 함수를 작성하세요. */


const inputA = [1,2,3,4,5];
const inputK = 1;


function solution(A, K) {

    // 문자열로 처리하기
    for (let i=0; i<A.length; i++) {
        A[i] = A[i].toString();
    }

    // 숫자 두개씩 조합하기
    let combResults = [];

    for (let i=0; i<A.length-1; i++) {

        for (let j=i+1; j<A.length; j++) {
            let combinated = [];
            combinated.push(A[i]);
            combinated.push(A[j]);
            let num = combinated.join('');
            let numRev = combinated.reverse().join('');
            combResults.push(num);
            combResults.push(numRev);
        }
    }

    // 문자를 다시 숫자로 만들기

    for (let i=0; i<combResults.length; i++) {
        combResults[i] = parseInt(combResults[i]);
    }

    // 내림차순 정렬

    combResults.sort(function(a, b) {
        return b - a;
    })

    return combResults[K-1];
}

console.log(solution(inputA,inputK));