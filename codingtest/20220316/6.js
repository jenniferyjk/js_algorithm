
/*전 세계의 알파벳들이 기차놀이를 하기 위해서 한 장소에 모였습니다.
뒤죽박죽 같은 스펠링의 알파벳들도 섞여 들어가 있습니다.
여기에서 반복 없이 가장 긴 알파벳 길이를 구하는 함수, solution을 완성해주세요.

예를 들어, 문자열 s가 abssccbsbsv 일 때, 반복 없이 가장 긴 알파벳 길이는 3입니다. */


const input = 'abssccbsbsv'

function solution(s) {

  // 카운트와 최대값을 저장할 변수 선언
  let count = 0;
  let gst = 0;

  for (let i=0; i<s.length-1; i++) {
    if (s[i] != s[i+1]) {
      count += 1;
    } else if (s[i] == s[i+1] && s[i-1] != s[i]) {
      count += 1;
      if (count > gst) {
        gst = count;
        count = 0;
      }else {
        count = 0;
      }
    } else {
      continue;
    }
  }

  return gst;
}

console.log(solution(input));