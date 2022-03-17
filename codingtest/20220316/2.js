
/*상현이와 성민이는 낱말 게임을 하고 있습니다. 패턴을 주면 이 패턴대로 한 사람씩 돌아가면서 낱말을 말하는 게임입니다.

예를 들어, 주어진 패턴 p가 "가나나가" 이고, 낱말 s가 "드래곤 바나나 바나나 드래곤" 라고 가정할 때 
게임의 경과는 무승부로 true를 출력합니다.

한 사람이 첫 번째 패턴인 "가" 시점에 특정 낱말을 말합니다.
ex: "드래곤"
그다음 사람은 "가" 패턴에 말한 낱말을 제외하고, 두 번째 패턴인 "나" 시점에 맞는 임의의 낱말을 말합니다.
ex: "바나나"
그다음 사람은 세 번째 패턴인 "나" 시점에 맞는 낱말을 말합니다.
ex: "바나나"
마지막으로 네 번째 패턴인 "가" 시점에 맞는 낱말을 말합니다.
ex: "드래곤"

패턴 p와 언급한 낱말들 s가 주어질 때, 해당 게임이 무승부로 끝났는지를 출력하는 함수, solution을 완성해주세요. */


const p = "가나나가";
const s = "드래곤 바나나 바나나 드래곤";

function solution(p, s) {
  const pattern = p.split('');
  const words = s.split(' ');

  //첫번째 반복 : 비교대상 고정
  for (let i=0; i<pattern.length; i++) {
    //두번째 반복 : i+1 부터 끝까지 같은 패턴 = 같은 단어인지 탐색
    for (let j=i+1; j<pattern.length; j++) {
      if((pattern[j] == pattern[i]) && (words[j] != words[i])){
        return false;
      }else {
        continue;
      }
    }
  }

  return true;


}

console.log(solution(p, s));
