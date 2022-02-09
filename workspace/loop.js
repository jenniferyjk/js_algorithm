

//for문 예제

for (let i=0; i < 3; i++) {
  console.log(i);
}

for (let i=10; i<3; i++) {
  console.log(i);
} //출력값 없음

let num=0;
for(; num<2; ) {
  console.log(num); //여기까지만 하면 무한루프
  num++; //정상수행
}

//이중for문

for (let i=0; i<3; i++){
  for(let j=0; j<3; j++){
    console.log(`${i} + ${j} = ${i+j}`); //백틱으로 변형 문자열 출력
  }
}


//while 예제

let i = 0; //변수 초기화 먼저

while (i<3) {
  console.log(i); // 여기까지 하면 무한루프!!!
  i++; //정상수행
}

//do-while

i=0;
do {
  console.log(i);
  i++;
} while(i<3);