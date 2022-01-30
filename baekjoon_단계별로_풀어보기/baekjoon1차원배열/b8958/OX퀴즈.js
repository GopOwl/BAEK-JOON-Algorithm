const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(__dirname + '/input.txt').toString().split('\n');

const num = +input[0];
const item = input.slice(1);

solution(num,item);

function solution(num,item) {
    for (let i =0; i<num; i++) {
        const oStr = item[i];
        let oCnt = 0; // O가 나올때 늘어나는 수
        let score = 0; // O가 나올때 늘어난 점수들 총합 
        for (let j = 0; j <oStr.length; j++) {
            const oCh = oStr[j];
            if(oCh === 'O') {
                oCnt++;
                score += oCnt;
            }
            else {
                oCnt = 0;
            }
        }
        console.log(score);
    }
}