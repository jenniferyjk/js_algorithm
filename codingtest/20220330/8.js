
/*좀비게임은 1명의 좀비와 N명의 사람이 진행하는 게임입니다.
게임 플레이 시간동안 각 참여자는 다른 참여자와 악수를 할 수 있습니다.

이때 좀비와 악수를한 플레이어는 좀비로 변하게 됩니다.

정해진 시간동안 악수를 다수의 참여자와 진행하며 시간이 끝난후 좀비가 아닌 플레이어 중에 악수를 가장 많이한 플레이어가 우승합니다.
만약 모든 플레이어가 좀비가 되었다면 좀비 플레이어가 우승합니다.

배열 A에는 참여자의 악수 정보가 들어있고 문자열 S에는 좀비 플레이어 정보가 제공되었을때 해당 라운드의 우승자를 찾는 함수를 작성하세요.
또한 악수 횟수가 동일한 경우 공동 우승으로 처리되며 오름차순으로 정렬하여 리턴하세요.
배열 A에 존재하는 순서는 터치 시간순서 이며 모든 플레이어는 1회 이상 악수를 진행합니다. */


const inputA = [["A", "B"], ["B", "C"], ["A", "C"], ["A", "D"], ["B", "E"]];
const inputS = "E";


function solution(A, S) {

    //참가자 추출하기
    let players = [];

    for (let i=0; i<A.length; i++) {
        for (let j=0; j<2; j++) {
            players.push(A[i][j]);
        }
    }

    players = [...new Set(players)];

    //플레이어 악수 횟수 세기
    let count = {};

    for (let i=0; i<A.length; i++) {
        for (index in A[i]) {
            let val = A[i][index];

            if (count[val] == undefined) {
                count[val] = 1;
            }else {
                count[val] += 1;
            }
        }
    }

    // 좀비킬 제외하기

    let zombiekill = [];

    for (let i=0; i<A.length; i++) {
        
        if (A[i].includes(S) == true) {
            for (let j=0; j<2; j++) {
                zombiekill.push(A[i][j]);
            }
        } else {
            continue;
        }
    }

    for (let i=0; i<zombiekill.length; i++) {
        if (zombiekill[i] != S) {
            count[zombiekill[i]] = 0;
        } else {
            continue;
        }
    }

    // 좀비를 추출하고 그외 플레이어와 나누기
    const zombieIndex = players.indexOf(S);
    players.splice(zombieIndex,1);

    const zombieScore = count[S];

    let gst = 0;
    let winner = [];

    for (index in players) {
        let val = players[index];

        if(count[val] >= gst) {
            gst = count[val];
            winner.push(val);
        }else {
            continue;
        }
    }

    // 좀비스코어와 최고스코어 비교하기

    var answer = [];

    if (zombieScore > gst) {
        answer.push(S);
    } else if (zombieScore == gst) {
        answer.push(S);
        for (let i=0; i<winner.length; i++) {
            answer.push(winner[i]);
        }
        answer.sort();
    } else {
        for (let i=0; i<winner.length; i++) {
            answer.push(winner[i]);
        }
    }

    return answer;
}

console.log(solution(inputA, inputS));