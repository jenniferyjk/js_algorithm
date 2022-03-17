
/*공백으로 구분하여 두 숫자가 주어집니다.
두번째 숫자로 첫번째 숫자를 나누었을 때 그 몫과 나머지를 공백으로 구분하여 출력하세요.
 */

const input = '25 21';
const numbers = input.split(' ');


div = Math.floor(numbers[0]/numbers[1]);
remainder = numbers[0]%numbers[1];

console.log(div, remainder);