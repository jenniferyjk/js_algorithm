/*주어진 패턴과 매칭되는 텍스트를 찾으려고 합니다. 
텍스트와 패턴을 앞에서 한 글자씩 비교해서 모든 글자가 일치할 때 해당 텍스트는 패턴에 매칭된다고 합니다.
패턴과 텍스트는 알파벳 소문자로 이루어져 있으며, 패턴에는 특수문자 물음표(?)와 별표() 2개가 추가로 존재합니다. 
물음표(?)는 어떤 글자와도 매칭된다고 가정하며, 별표()는 0글자 이상의 어떤 글자와도 매칭된다고 가정합니다.

예를 들어, 패턴 p fast*와 텍스트 배열 s [fastcampus, fast, faster, notfast, notfaster]가 있을 때 
매칭되는 텍스트의 개수는 3개 (fastcampus, fast, faster)입니다.

패턴 p와 텍스트 배열 s가 주어질 때, 패턴에 매칭되는 텍스트의 개수를 출력하는 함수, solution을 완성해주세요.
 */

const p = 'fast*';
const s = ['fastcampus', 'fast', 'faster', 'notfast', 'notfaster'] ;

const p_arr = p.split("")
let count = 0;
let comp = '';

for (let i=0; i<s.length; i++) {
  let s_arr = s[i].split("");

  for (let j=0; j<p_arr.length; j++) {
    if(p_arr[j] == s_arr) {
      
    }
  }
}