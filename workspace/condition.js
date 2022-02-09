
//if-else 문
let apple_price = 3;

if(apple_price >= 10) {
  console.log("very expensive!");
} else if (apple_price <5){
  console.log("very cheap :D");
} else {
  //5~9
  console.log("nice!");
}

console.log("Done!");

//3항연산자 (if-else 대체 가능)

let age = 15;

msg = (age < 19) ? "The user is of underage" : "The user is an adult";
console.log(msg);

//switch 예제1

let day_num = 1;
let day;

switch(day_num) {
  case 0: //숫자의 자리에 조건을 넣는다 (day_num = 0일때 라는 뜻)
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 2:
    day = "Tuesday";
    break;  
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break; 
  case 6:
    day = "Saturday";
    break;
  default: //조건에 해당되지 않는 상황일 때
    day = "error";
    break   
}

console.log(day);

//switch 예제2

let browser = "Chrome";

switch(browser) {
  case "Explorer" :
    msg = "ActiveX install required";
    break;
  case "Chrome":
  case "Safari":
  case "FireFox":
  case "Opera": //동일 결과를 나타낼 경우 break 없이 위와같이 표현 가능
    msg = "Supported browsers";
    break;
  default:
    msg = "Unsupported browser";
    break;
}

console.log()