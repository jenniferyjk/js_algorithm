
/*배열 A에는 0보다 큰 숫자가 N개 들어있습니다.
모든 숫자를 아우르는 최대 공약수를 구하는 함수를 작성하세요. */

const input = [6, 12, 4];

function solution(A) {

    //약수를 담을 배열 선언
    let divisors = [];

    //배열 요소를 반복하여 약수 담기
    for (let i=0; i<A.length; i++) {
        for (let j=1; j<=A[i]; j++) {
            if (A[i] % j == 0) {
                divisors.push(j);
            }
        }
    }

    // 반복으로 약수 별 개수 구하기

    let sortedDiv = [...new Set(divisors)]; // 중복제거

    let count = {};

    for (index in divisors) {
        let val = divisors[index];

        if (count[val] == undefined) {
            count[val] = 1;
        } else {
            count[val] += 1;
        }
    }


    // 개수가 A의 원소개수와 일치하고 크기가 가장 큰 값을 반환하기
    
    let gst = 0;

    sortedDiv.sort(function(a, b) {
        return a - b;
    });

    for (let i=0; i<sortedDiv.length; i++) {
        let num = sortedDiv[i];

        if (count[num] == A.length) {
            gst = num;
        }

    }
    
    return gst;
}

console.log(solution(input));