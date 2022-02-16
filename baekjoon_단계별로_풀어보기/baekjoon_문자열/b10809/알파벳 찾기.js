const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(__dirname + '/input.txt').toString().split('\n');

solution(input[0]);

function solution(S) {
    let answerArray = new Array(26).fill(-1);
    for(let i = 0; i<S.length; i++) {
        let nowChar = S[i];
        let ansArrIdx = nowChar.charCodeAt() - 97;
        if(answerArray[ansArrIdx] === -1) {
            answerArray[ansArrIdx] = i;
        }
    }

    let answer = '';
    for(let i = 0; i<answerArray.length; i++) {
        answer += answerArray[i] + ' ';
    }
    console.log(answer);
}