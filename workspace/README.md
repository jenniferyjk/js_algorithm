# javascript_algorithm



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



#### typeof

- 인수의 자료형을 반환하는 연산자

  - typeof x, 함수 typeof(x)로 문법 지원

    ``` javascript
    let str = "hello, world!";
    console.log(typeof str);
    ```













