const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(__dirname + '/input.txt').toString().split('\n');

solution(+input[0]);

function solution(N) {
    let cnt = 0;
    while (N > 0) {
        if (N % 5 === 0) {
            N = N - 5;
            cnt++;
        }
        else if (N % 3 === 0) {
            N = N - 3;
            cnt++;
        }
        else if (N > 5) {
            N = N - 5;
            cnt++;
        }
        else {
            cnt = -1;
            break;
        }
    }
    console.log(cnt);
}