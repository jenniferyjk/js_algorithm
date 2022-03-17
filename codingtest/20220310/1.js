/*숫자를 뒤집어 주세요.
만약에 -587이 들어오면 -785로 변경되어야 합니다.
결과의 절댓값이 100,000을 넘어가면 0을 출력해주세요.

[제한 사항]

결과의 절댓값이 100,000을 넘어가면 0을 출력합니다. */


const num = -7800

function solution(num) {
    const ref_num = Math.abs(num).toString();
    const num_arr = ref_num.split('');
    let new_arr = [];
    
    for (let i=0; i<num_arr.length; i++) {
      new_arr.unshift(num_arr[i]);
    }
    
    const num_str = new_arr.join('');
    const result = parseInt(num_str);

    if (Math.abs(result) > 100,000) {
      return 0;
    }else if (num < 0) {
      return -result;
    }else {
      return result;
    }
  
}

console.log(solution(num));