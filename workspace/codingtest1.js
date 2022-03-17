function solution(n) {
  let sum = 0;
  for(i=1; i<=n; i++) {
      sum += i;
      
  }
  return sum;
}

console.log(solution(4));

console.log(4%2);

/* 앱 디자인을 하려고 합니다.
디자인 영역 area가 주어질 때, 이 영역과 일치하는 사각형의 가로 w와 세로 h를 구하는 함수, solution을 완성해주세요.
단, 다음 조건을 만족해야 합니다.

세로 화면 최적화를 위해 가로는 세로보다 길 수 없습니다.
여러 가능한 가로, 세로 조합 중 두 값의 차이가 가장 적은 값을 찾습니다.
예를 들어, area가 4일 때, 커버할 수 있는 가로, 세로는 다음과 같습니다.*/

let area = 4;

function solution(area) {
  let w_max ;
  w_max = parseInt(area/2);

  for (let i=1; i<=w_max; i++){
    if (area%i == 0) {

    }
  }
};


/* 코로나 심각도에 따라 거리두기 레벨 level이 주어질 때 방역수칙을 준수했는지 여부를 출력하는 
함수, solution을 완성해주세요.

예를 들어, lineUp이 c이고, level이 2일 때, 결과는 true입니다.

첫 번째 사람 (index=0)과 두 번째 사람 (index=4)은 거리가 3만큼 떨어져 있으므로 방역수칙을 준수했습니다.
두 번째 사람 (index=4)과 세 번째 사람 (index=7)은 거리가 2만큼 떨어져 있으므로 방역수칙을 준수했습니다.
결과 : 방역수칙을 준수했습니다.

[제한 사항]

두 사람 사이의 거리 즉, lineUp의 두 개의 1 사이의 0의 수가 K일 때, K >= level이면 방역수칙 준수 중입니다.*/

function solution(lineUp, level) {
  let human = 0 ;
  let count = 0 ;
  for (let i=0; i<lineUp.length; i++) {
      if (lineUp[i] == 1) {
        human += 1;
        
      } else {
        continue;
      }
  }
}





