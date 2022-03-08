const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(__dirname + '/input.txt').toString().split('\n');

solution(+input[0]);

function solution(N) {
    let sum = 1;
    let i = 1;
    while (sum < N) {
        sum = sum + (6*i);
        i++
    }
    console.log(i);
}