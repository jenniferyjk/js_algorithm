/*공백으로 구분하여 두 숫자 a와 b가 주어지면, a의 b승을 구하는 프로그램을 작성하세요 */

const numbers = '2 8';

const num_arr = numbers.split(' ');

const answer = (num_arr[0])**(num_arr[1]);

console.log(answer);


//다른 풀이

console.log(Math.pow(parseInt(num_arr[0]),parseInt(num_arr[1])));
//Math.pow(x, y) : x의 y승을 반환