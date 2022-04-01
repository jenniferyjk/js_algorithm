
/*우리나라의 화폐단위는 50000, 10000, 5000, 1000, 500, 100, 50, 10, 5, 1 원으로 이루어져 있습니다.
거스름돈 금액 A원이 입력 되었을때 해당 거스름돈을 만족하는 최소한의 화폐 개수를 리턴하는 함수를 작성하세요. */

const input = 12345;




//1+2+3+4+1



function solution(A) {
    // 화폐단위 배열
    const units = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 5, 1];
    let count = 0; //화폐 개수를 셀 변수
    
    for (let i=0; i<units.length; i++) {
        if (A >= units[i]) {
            let val = A / units[i];

            val = parseInt(val);
            count = count + val;
            A = A - (units[i]*val);
        } else {
            continue;
        }
    }

    return count;
}

console.log(solution(input));