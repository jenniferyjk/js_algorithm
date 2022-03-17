
//콜백 함수 계산기 예제

function add(x, y){
  return x+y;
}

function sub(x, y){
  return x-y;
}

function mul(x, y){
  return x*y;
}

function div(x, y){
  return x / y;
}

function calculator(callback,x,y) {
  return callback(x,y);
}

console.log(calculator(add,1,3));
console.log(calculator(mul,100,4));


