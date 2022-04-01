
/*
나튜브에는 다양한 카테고리의 개인 방송국이 있습니다.
나튜브의 메인 페이지에는 사용자의 구독 정보를 바탕으로 영상을 추천해주는 기능이 있습니다.

각 방송국에는 한개이상의 카테고리를 가지고 있으며 추천은 구독한 방송국과 동일한 카테고리에 해당하는 방송국들의 컨텐츠들을 보여줍니다.
방송국과 카테고리 정보가 담긴 2차원 배열 A와 특정 유저의 구독 정보가담긴 1차원 배열 B가 주어질 때 
영상 추천 가능한 방송국의 개수를 리턴하는 함수를 작성하세요.
 */

const input1 = [["Game", "broadcast1"], ["Sport", "broadcast1"], ["Vlog", "broadcast1"], ["Game", "broadcast2"], ["Sport", "broadcast3"], ["Vlog", "broadcast4"]];
const input2 = ["broadcast1"];


// output : 4

function solution(A, B) {
    var answer = 0;

    let preference = [];
    let recommend = [];

    for (let i=0; i<A.length; i++) {
        if(A[i][1] == B[0]) {
            preference.push(A[i][0]);
        } else {
            continue;
        }
    }

    for (let i=0; i<preference.length; i++) {
        for (let j=0; j<A.length; j++) {
            if ((A[j][1] != B[0]) && (A[j][0] == preference[i])) {
                recommend.push(A[j][1]);
            }
        }
    }

    answer = recommend.length + 1;
    
    return answer;
}

console.log(solution(input1, input2));

