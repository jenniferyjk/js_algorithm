# javascript_기본



### 1. 변수와 상수

#### 변수란?

- 변수 : __변경 가능한 값__을 저장하는 메모리 공간
- 사용하기 전 반드시 선언하고, 중복 선언이 불가능함
- 키워드 : let
  - let 변수이름 = 값 ;
  - 변수에 새로운 값을 할당하여도 __메모리주소__는 변경되지 않음

```javascript
// 추천
//선언과 동시에 할당
const lang = 'JavaScript' //-> const 사용 권장

// 변수 선언 -> var , let , const 사용
let lang;

// 할당
lang = 'JS'

// 재할당
lang = 'javascript'

// 선언과 동시에 할당
let lang = 'JavaScript';

// 재할당
lang = 'JS'
```



#### 상수란?

- 상수 : __변경 불가능한 값___을 저장하는 메모리 공간
- 사용하기 전 반드시 선언, 중복 선언 불가능
- 키워드 : const
  - const 상수이름 = 값;
  - 값을 재할당하는 것이 불가능함

#### Hosting

- 코드에 선언된 변수 및 함수를 유효한 범위의 코드 상단으로 끌어 올리는 작업
- var의 변수/함수의 선언만 위로 올려지고, 할당은 올려지지 않음
- let/const 선언과 함수 표현식에서는 발생하지 않음
  - 따라서 let/const 변수 선언 권장, var로 하면 무분별한 호이스팅 발생으로 오류 발생 가능성 높음
  - let/const 사용하면 문법적 정확성을 높일 수 있음

---



### 2. javascript의 자료형

#### 자료형의 종류

- Boolean : 논리적 값 - true , false

- null : 존재하지 않거나 유효하지 않은 주소 표시
  - 값이 비어있다는 의미로 표현되는 자료형 (nothing, empty, unknown)
  
- undefined : 선언 후 값을 할당하지 않은 변수

- number : 정수, 실수 등의 숫자 (정수의 한계는 +/- 2^53)
  - int, float, Infinity, -Infinity, NaN(Not a Number)
  - isNaN() <-을 통해 숫자인지 판별 가능
  
- string : 빈 문자열 또는 글자들을 표현하는 문자열

  - 큰따옴표, 작은따옴표, __역따옴표(백틱)__ 사용하여 표현

- symbol : 문자열과 함께 객체 property로 사용(ES6)

- object : 두개 이상의 복잡한 개체 저장 가능

  - 다수의 원시 자료형을 포함하거나 복잡한 개체를 표현할 수 있는 자료형

  - Object() 혹은 {}를 통해 생성

  - key: value 형태로 표현, object.key 형태로 접근가능

  - __객체 추가__는 object.key = value 로 추가 가능, __delete object.key__로 삭제

    ```javascript
    let user = {
        name : "john",
        age : 27,
    }
    
    user.name //형태로 접근
    ```

###### [220210]

- 기본타입 : number, string, boolean 등..

- **객체타입** 자료형: 파이썬의 딕셔너리, 배열 등...

  ```javascript
  const obj = {
      name : 'kim',
  };
  
  const arr = ['kim']
  
  function func() {
      return 'kim'
  }
  ```

  



#### typeof

- 인수의 자료형을 반환하는 연산자

  - typeof x, 함수 typeof(x)로 문법 지원

    ``` javascript
    let str = "hello, world!";
    console.log(typeof str);
    ```





#### 객체 복사 문제

- object의 값을 복사할때, 전체가 아닌 object 내 주소값만 복사되는 문제 발생
  - 대상 전체를 복사하는 방법은 얕은복사(shallow copy), 깊은 복사(deep copy)를 통해 가능

##### 얕은 복사( Shallow copy )

1. 반복문 for문을 통한 복사

   ```javascript
   let admin = {};
   
   for (let key in user) {
     admin[key] = user[key];
   }
   ```

2. Object 메서드 활용

   ```javascript
   let admin = Object.assign({}, user);
   ```

3. 전개 연산자 활용 (ES6)

   ```javascript
   let admin = {...user};
   ```

###### 얕은 복사 문제점

- 객체 내 또다를 객체가 있다면 복사되지 않음

  ```javascript
  let user = {
      name : "john",
      age : 27,
      sizes : {
          height : 179,
          weight : 70,
      },
  };
  ```

  

##### 깊은 복사(deep copy)

1. 재귀함수 활용
2. JSON객체를 이용 (stringify 활용)

---



### 3. 형 변환

#### javascript의 특징

- 자바스크립트는 __동적 타입 언어__로 변수의 자료형을 명시적으로 선언할 필요가 없음
- 연산자로 인한 계산 또는 변수에 전달되는 값은 __자동으로 암묵적 형 변환__ 수행
- 강제적 형 변환 : 자료형 함수(메서드)를 활용해 명시적 형 변환 수행



#### String 형 변환

- String(data); 를 통해 문자열로 형 변환

  ```javascript
  console.log(String(123));
  console.log(String(1 / 0));
  console.log(String(-1 / 0));
  console.log(String(NaN));
  console.log(String(true));
  console.log(String(false));
  console.log(String(undefined));
  console.log(String(null));
  console.log(String("hahah"));
  ```



#### Number 형 변환

- Number(data);를 통해 형 변환
- __정수 혹은 실수__의 명시적 변환은 __parse 함수__ 사용
  - 정수 변환 : parseInt(피연산자) , 실수 변환 : parseFloat(피연산자)



#### Boolean 형 변환

- Boolean(data);를 통해 형 변환
- 0 값이 아니면 true 반환 **

---



### 4. 연산자

#### 연산자

- 연산의 대상 값 : 피연산자
- 연산의 종류 : 단항 , 이항, 삼항
  - 단항 : 부호, 증감, 논리, 비트 연산자 등
  - 이항: 산술, 대입, 비교, 논리 연산자 등
  - 삼항 : 조건식 "? 참일 경우의 식 : 거짓일 경우의 식"



#### 산술 연산자 

- 수학적 계산을 위해 제공하는 연산자
- +, - , * , / , %(나머지 연산자), **(제곱 연산자)



#### 복합 대입 연산자

- 산술 연산자로 피연산자를 계산해 결과값을 한번에 대입시켜주는 연산자
- +=, -=, *=, /=, %=



#### 비교 논리 연산자

- 좌항과 우항의 피연산자를 비교한 다음 결과값을 논리적 자료형으로 반환
- == : 단순 값의 같음 , === : 자료형까지 같음을 비교하는 일치비교 연산자 
- 비교 : <, >, >=, <=, ==, !=, ===, !==
- 논리 : && (and) , || (or), ! (not)

---



### 5. Scope

#### Scope 란?

- 변수 혹은 상수에 접근할 수 있는 범위

- 전역 변수(global)와 지역 변수(local)로 구분

  - 전역 변수 : 전역에 선언, 어디에서나 접근 가능한 변수

  - 지역 변수 : 특정 지역 내에서 선언, 지정된 구역 내에서만 접근 가능한 변수 (__중괄호 영역__ 내에 있는 것)

    ```javascript
    let x = 1;
    let y = 2;
    
    console.log(x); //output : 1
    console.log(y); //output : 2
    
    {
        let x = 3;
        let y = 4;
        
        console.log(x); //output 3
        console.log(y); //output 4
    }
    
    console.log(x); //output : 1
    console.log(y); //output : 2
    ```

- 글로벌 -> 로컬 변수 접근 불가

  ```javascript
  let A = 1;
  let B = 2;
  
  {
      let C = 3;
  	let D = 4;
      
      console.log(A); //output : 1
      console.log(C); //output : 2
  }
  
  console.log(C); // error : C is not defined
  ```

  

---



### 6. 조건문

#### if-else 조건문

```javascript
if (조건문) {
    실행code
} else if (조건문) {
    실행code
} else {
    실행 code
}

실행 code // if-else 이후 실행
```

###### 3항연산자

- if-else 대체 가능

- 변수 = (조건식) ? 참일때 값:거짓일때 값

  ```javascript
  let age = 20;
  
  msg = (age < 19) ? "The user is of underage":"The user is an adult"
  console.log(msg);
  ```



#### Switch

- 표현식을 평가하여 그 값이 일치하는 case를 실행하는 조건문
- 키워드 : switch, case, break, default
  - 하나의 case만 수행되도록 끝을 break로 맺음 (일반적으로)

```javascript
switch (ch) {
    case 1:
        statements;
        break;
    case 2:
        statements;
        break;
    case 3:
        statements;
        break;
}
```

---



### 7. 반복문(loop)

#### for 반복문

- 선언문, 조건문, 증감문 형태로 이루어짐 (각 자리에 공백 입력 가능)
- 조건문이 fail 되기 전까지 코드 블록을 반복 수행

```javascript
for (Init Expression; Test Expression; Update Expression) {
    // statement block
}
```

##### for in 반복문

- 객체의 key, value 형태를 반복하여 수행

- 객체의 키 개수만큼 반복

  ```javascript
  for (key in object) {
      //실행 code
  }
  
  const profile = {name : "John", age : "25"};
  
  let text = "";
  for (let x in profile) {
      text += profile[x];
  }
  cosole.log(text);
  ```

##### for .. of 반복문

- collection객체 자체가 Symbol.iterator 속성을 가지고 있어야 동작 ㄱ가능 (ES6)

  ```javascript
  for (variable of iterable) {
      //실행 code
  }
  
  let language = "Javascript";
  let text = "";
  
  for (let x of language) {
      text += x;
      console.log(x);
  }
  ```



#### While 반복문

- 조건문이 참일 때 코드블록을 계속해서 반복 수행 

- 무한루프 등 수행시 자주 사용

- 조건문을 코드 블록보다 아래로 옮긴 __do..while__반복문도 존재(최소 한번 수행이 필요할 때)

  ```javascript
  while (조건문) {
      //실행 code
  }
  
  do {
      //실행 code
  } while (조건문) ;
  ```

  

#### 반복문 제어

- __break__ : 반복문 수행 시 코드 블록을 탈출할 때 사용되는 식별자
  - 다중 반복일 경우 가장 안쪽의 반복문을 종료
  - label을 통하여 다중 반복문을 한번에 종료 가능
- __continue__ : 반복문 수행 시 코드블록 실행을 해당 라인에서 중지, 블록 코드 종료시킨 후 반복문 내 명시된 조건 판단

---



### 8. 함수

#### 함수란?

- 다수의 명령문을 코드블록으로 감싸고, 하나의 실행단위로 만든 코드 집합
- 유사한 동작을 하는 코드를 하나로 묶어 __범용성 확대__
- 정의 부분 / 호출 부분으로 구성
- 가급적 1가지 일만 수행, 매개변수는 최대 3개 이내 권장

``` javascript
//ex )

function add(x,y) { //함수이름(매개변수)
    return x + y ; //반환 결과
}

add(10, 20); //10,20:인자 / 전체 -> 함수호출
```



#### 함수 정의

- return 이후의 코드는 실행되지 않음(함수 내에서)

1. 함수 선언식 (Declarations)

   ```javascript
   function add(x, y) {
       return x + y ;
   }
   ```

2. 함수 표현식 (Expressions)

   ```javascript
   const add = function (x,y) {
       return x+y;
   }
   ```

3. 화살표 함수 (Arrow Function)

   ```javascript
   const add = (x,y) => x+y;
   ```



#### 함수 호출

- 자바스크립트 함수는 매개변수와 인수의 개수가 일치하는지 확인하지 않음
- undefined 변수가 들어올 경우 값 초기화 지정 가능



#### 재귀함수



#### 콜백 함수

- 콜백함수 : 다른 함수의 매개변수로 전달되어 수행 되어지는 함수
- 고차 함수(higher-order function) : 매개변수를 통해 함수를 받아 호출하는 함수



#### 메서드(method)

- 객체에 저장된 값이 __함수__인 경우 이를 메서드 라고 부름

- __this__ : 메서드(함수)에서 객체 내부의 속성(property)값에 접근할 수 있도록 하는 지시자

  ``` javascript
  let obj = {
      name : "peter",
      age : 18,
      hello_func() {
          console.log("hello"+this.name)
      },
  };
  ```

  

---



### 9. 자료형 심화

#### Number

- 자바스크립트 : 64비트 형식, IEEE-754 표준 기반 형태로 저장

- 10진수, 16진수, 8진수, 2진수 등 사용

- 대표 메서드

  - 문자열로 변환 : Number.toString();

    ```javascript
    let us = 1e-6;
    
    us.toString();
    String(us);
    console.log((us + ""));
    
    //세가지 방법을 통해 문자열로 형 변환
    ```

  - 특정 자리수까지 제한 : Number.toFixed(), Number.toPrecision();

    ```javascript
    let num1 = 125.0;
    let num2 = 123.456;
    
    //toFixed();는 소수의 자리수 길이를 제한
    console.log(num1-num2).toFixed(3); // output : 1.544
    
    //toPrecision();은 정수와 소수의 자리 수를 합한 길이로 제한
    console.log(num1-num2).toPrecision(3); // output : 1.54
    ```

  - 정수와 실수 형 변환

    ``` javascript
    console.log(Number.parseInt("125px")); //output : 125
    console.log(Number.parseFloat("1.25cm")) //output : 1.25
    ```

  - 타입 확인 : Number.isNan(), Number.isFinite();

- 지수표기법

  ```javascript
  let billion_1 = 1000000000; //10억
  let billion_2 = 1e9; // 1 + 0이 9개
  let us = 1e -6 // 왼쪽으로 6번 소수점 이동 0.000001
  ```

- 진법 표기

  ```javascript
  // 0x~(16진수), 0o~(8진수), 0b(2진수)로 N진수 표기 가능
  
  let hex = 0x0f;
  let oct = 0o17;
  let bin = 0b1111;
  
  //모두 각자 진수로 표현된 15라는 값임
  ```



#### String

- 자바스크립트 : char 자료형 없음, UTF-16형식 따름(페이지 인코딩과 상관 없음)

- 문자열 내 줄바꿈

  ```javascript
  console.log("line\nfeed"); // \n <-개행문자
  console.log("line\rfeed"); // \r 도 개행문자로 활용가능
  
  // \표현은 \\로
  console.log("line\\feed");
  
  // \t <-tab 효과
  console.log("line\tfeed");
  
  // unicode표현
  console.log("line\u{1F60D}feed");
  
  ```

- 대표 속성과 메서드

  - 문자열 길이: String.length

    ```javascript
    let str = `hello\n world \n!!!`
    console.log(str.length); //15
    ```

  - 문자열 내 개별 문자 접근

    ```javascript
    let str = "hello, world !!!"
    
    //String.charAt(index)
    console.log(str.charAt(1)); //output : e
    
    //String.charCodeAt(index) -> 아스키코드 출력
    console.log(str.charCodeAt(1)) //output : 101
    
    //String[index] **
    console.log(str[0]); //output : h
    ```

  - 문자열 검색

    ```javascript
    let text = "hello, world!!!";
    
    // index 검색
    console.log(text.indexOf("o"));
    console.log(text.indexOf("o",3)); //3번 인덱스부터 탐색(시작위치 지정)
    console.log(text.lastIndexOf("o")); //맨 뒤부터 인덱스 찾기
    
    // boolean (true/false)
    console.log(text.includes("hello")); //true
    console.log(text.includes("Hello")); //false(대소문자 구분O)
    console.log(text.startsWith("ello")); // false -> 있으나 맨~~ 앞이 시작되지 않게 때문
    console.log(text.startsWith("ello",1)); //true -> 시작위치 지정 가능
    console.log(text.endsWith("!!!")); // true
    console.log(text.endsWith("world")); //false
    
    ```

  - 대소문자 변환

    ```javascript
    let str = "Hello!";
    
    console.log(str.toUpperCase()); //대문자로
    console.log(str.toLowerCase()); //소문자로
    ```



#### 문자열 변환



