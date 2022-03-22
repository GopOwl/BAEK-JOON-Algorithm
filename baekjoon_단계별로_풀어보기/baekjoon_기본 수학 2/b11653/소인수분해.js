const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(__dirname + '/input.txt').toString().split('\n');

solution(+input[0]);

function solution(N) {
    let result = [];
    for (let i = 2; i <= N; i++) {
        while (N % i === 0) {
            N = N / i;
            result.push(i);
        }
    }
    console.log(result.join('\n'));
}