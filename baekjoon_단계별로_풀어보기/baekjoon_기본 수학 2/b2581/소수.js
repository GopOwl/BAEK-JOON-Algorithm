const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(__dirname + '/input.txt').toString().split('\n');

solution(+input[0], +input[1]);

function solution(M, N) {
    let primeNum = [];
    let sum = 0;
    for (let i = M; i <= N; i++) {
        for (let j = 2; j <= i; j++) {
            if (j * j > i) { // j의 제곱이 주어진 수보다 커지면 더이상 볼 것도 없이 소수이므로
                primeNum.push(i);
                sum += i;
                break;
            }
            if (i % j === 0) {
                break;
            }
        }
    }
    if(primeNum.length===0) {
        console.log(-1);
    }
    else {
        console.log(sum);
        console.log(primeNum[0]);
    }
}