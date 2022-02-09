// 함수 예제

function print_add(x,y) {
  console.log(x+y);
}

print_add(); //output : Nan -> 매개변수를 필요로 할때, 넣지 않으면 undefined로 처리됨
print_add(10);
print_add(10,20);
print_add(10,20,30); //매개변수를 초과하여 넣어도, 함수에서 필요로하는 매개변수 까지만 처리하고 그 이후는 처리하지 않음

function print_add2(x, y=10){
  // y에 기본값 설정
  console.log(x+y);
}

print_add2(10);

//dynamic parameter

function print_min() {
  console.log(arguments[0]-arguments[1]); //arguments를 통해 매개변수 없이 실행 가능 
}

print_min(10, 20, 30); //()안의 값이 arguments(인덱스로 표현)


function add(x, y) {
  return x+y ;
  console.log("hello!"); //unreachable code
}

let result = add(10, 20);
console.log(result);

//조건문과 함께 활용

function checkAge(age) {
  if (age >= 18) {
    return true;
  } else {
    return false;
  }
}

console.log(checkAge(14));
console.log(checkAge(25));