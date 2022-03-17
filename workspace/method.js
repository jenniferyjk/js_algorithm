
let list = [ 'andrew', 28, function hello_func(){
  console.log('hello!');
},
];

let obj = {
  name : 'peter',
  age : 18,
  hello_func() {
    console.log("hello!");
  },
};

function hello_func(){
  console.log("hello!");
}

hello_func();
obj.hello_func();
list[2]();

console.log(typeof hello_func);
console.log(typeof obj.hello_func);
console.log(typeof list[2]);


//this

let user = {name : "peter"};
let admin = {name : "admin"};

function say_hello() {
  console.log("hello " + this.name);
}

user.func = say_hello;
admin.func = say_hello;

user.func();
admin.func();