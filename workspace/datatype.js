
let str = "hello world";
console.log(typeof str); //string이라는 결과 출력

console.log(typeof undefined);
console.log(typeof 123);
console.log(typeof 456n);
console.log(typeof 123.123);
console.log(typeof true);
console.log(typeof "Hello");
console.log(typeof Symbol('id'));
console.log(typeof Math);
console.log(typeof null);
console.log(typeof console.log);


//boolean
let name_check = true;
let age_check = false;

let value_check = 10>1 ;
console.log(value_check);

//null
const null_check = null;
console.log(null_check === null); //변수가 할당되어 있기 때문에 true 반환

//number
let n1 = 123.0;
let n2 = 123.456;
let n3 = 1/0;

console.log(n1-n2); //output : -0.45600000000000307 
console.log((n1-n2).toFixed(3)); // 반올림 처리, output : -0.456
console.log(n3); // output : infinity

//string
let str1 = 'hello';
let str2 = "hello";

let num = 3;
let str3 = `hello_${num}`;
console.log(str3);


