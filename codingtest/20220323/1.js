
/*주어진 정수 A와 B를 2진수로 표현했을 때, A를 B로 바꾸기 위하여 뒤집어야 하는 비트의 개수를 구하는 함수를 작성하세요. */

const A = 29;
const B = 15;

//2진수로 변환

let binA = A.toString(2);
let binB = B.toString(2);


//배열화하기 
binA = binA.split('');
binB = binB.split('');
let count = 0; //뒤집을 비트의 개수

for (let i=0; i<binA.length; i++) {
    if(binA[i] == binB[i]) { //같으면 pass
        continue;
    }else if (binA[i] != binB[i]) { //다르면 값 바꾸고, 카운트 올리기
        if(binA[i] == 1) {
            binA[i] == 0;
            count += 1;
        }else {
            binA[i] == 1;
            count += 1;
        }
    }
}


console.log(count);