# javascript_algorithm (기본문법)



### 1. 변수와 상수

#### 변수란?

- 변수 : __변경 가능한 값__을 저장하는 메모리 공간
- 사용하기 전 반드시 선언하고, 중복 선언이 불가능함
- 키워드 : let
  - let 변수이름 = 값 ;
  - 변수에 새로운 값을 할당하여도 __메모리주소__는 변경되지 않음

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



#### 3항 연산자

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



