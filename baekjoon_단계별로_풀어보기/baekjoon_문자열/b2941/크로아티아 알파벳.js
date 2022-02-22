const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(__dirname + '/input.txt').toString().split('\n');

solution(input[0]);

function solution(str) {
    let ans = 0;
    for (let i = 0; i<str.length; i++) {
        let ch = str[i];
        ans++;
        if(i>= str.length - 1) { // 만약 abc 문자를 받았을때 c면 그 다음문자를 확인해야 하는데 c가 마지막 문자라서 이 if 문이 없다면 이상한 결과가 나올것이다 
                                 // 이 반복문은 그러한 상황을 막아주는 반복문이다 i가 2니까 참이 되고 for문으로 돌아가면 조건에 부합하지 않으므로 종료되는것이다.
            continue;
        }
        if(ch === 'c') { 
            let nextCh = str[i+1];
            if(nextCh === '=' || nextCh === '-') { // ch의 문자가 c일때 그 다음문자를 확인해서 만약 '=' 나 '-' 라면 i를 이 if문에서 1 증가시키고 continue문으로 다시 for문
                                                    // 처음으로 돌아서 거기서도 i++로 인해서 1증가해서 그 i부터 for문을 반복하는것임 예를들어서 a b c= e 가 있다하면 i가 2여서 ch는 c인 상황이라고 가정 하면 c 다음문자가 = 니까
                                                    // i를 1증가시켜서 3이 되고 continue로 인해 for문 처음으로 돌아가서 i를 1증가시켜서 i는 4인 상태에서 반복문 시작하는거임 그래서 ch는 e가 되는것이다.
                i = i + 1;
                continue;
            }
        }

        if(ch === 'd') {
            let nextCh = str[i+1];
            if (nextCh === '-') {
                i = i+1;
                continue;
            }
            if (i <str.length - 2) { // 조건식이 i <str.length - 2 인 이유는 입력값이 abd- 라고 한다면 i가 2일때 i+2를 한다면 값이 없으므로 이상한 값이 나올것이기에 
                let nextNextCh = str[i+2];
                if (nextCh === 'z' && nextNextCh === '=') {
                    i = i+2
                    continue;
                }
            }
        }

        if (ch === 'l' || ch === 'n') {
            let nextCh = str[i+1];
            if (nextCh === 'j') {
                i = i+1;
                continue;
            }
        }

        if (ch === 's' || ch === 'z') {
            let nextCh = str[i+1];
            if (nextCh === '=') {
                i = i+1;
                continue;
            }
        }
    }
    console.log(ans);
}