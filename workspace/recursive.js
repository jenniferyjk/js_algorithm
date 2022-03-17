// 1. basic recursive function

function recursive(num) {
  if(num == 0) {
    return 0;
  }else {
    return num + recursive(num-1);
  }
} 
console.log(recursive(3)); // output : 3 + (2 + (1 + (0)));

// 2. factorial

function factorial(n) {
  if (n === 0) {
    return 1;
  }else {
    return n * factorial(n-1);
  }
}

const num = 3;

let result = factorial(num);

console.log(`The factorial of ${num} is ${result}`);