const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(__dirname + '/input.txt').toString().split('\n');

let star = '';

solution(+input[0]);

function solution(N) {
    for (let i=1; i<=N; i++) {
        star += '*';
        console.log(star);
    }
}