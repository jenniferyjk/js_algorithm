
//제어문 예제
let text = "";

for (let i=0; i<=10; i++) {
  if (i === 3) break;
  text = text + i ;
}

console.log(text);

text = "";

for (let i=0; i<=10; i++) {
  if(i === 3) continue;
  text += i;
}
console.log(text);

//label 예제

for (let i=0; i<3; i++) {
  for (let j=0; j<3; j++) {
    console.log(i + "*" + j + "=" + i*j);
    break; //j가 0일때만 보임
  }
}

end : for (let i=0; i<3; i++) {
  for (let j=0; j<3; j++) {
    console.log(i + "*" + j + "=" + i*j);
    break end; //label활용 (권장 X)
  }
}