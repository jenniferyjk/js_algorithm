//object

let user = {
  name: "john",
  age: 27,
};

console.log(typeof user);
console.log(typeof user.name)
console.log(typeof user.age);

console.log(user);
console.log(user.name);
console.log(user["name"]);

user.age = 30;
console.log(user.age);

user.weight = 72; //추가
console.log(user);

delete user.age; //삭제
console.log(user);


//객체 복사 문제점

let admin = user;
console.log(admin);

admin.name = "park"; //복사한 객체 자료형에서 수정
console.log(admin.name);
console.log(user.name); //기존 객체 자료에서도 name 값이 수정되어버림(output : park)

user.age = 30;
console.log(admin.age); //반대 경우도 동일하게 발생


// 얕은 복사
// 1. for문 활용
let admin = {};

for (let key in user) {
  admin[key] = user[key];
}

// 2. using Object
let admin = Object.assign({}, user);

// 3. 전개 연산자 활용 (ES6)
let admin = {...user};


// 깊은 복사
user.sizes = {
  height : 180,
  weight : 72,
};

// JSON객체를 활용한 해결
let admin = JSON.parse(JSON.stringify(user));

admin.sizes.height = admin.sizes.height +1 ; 