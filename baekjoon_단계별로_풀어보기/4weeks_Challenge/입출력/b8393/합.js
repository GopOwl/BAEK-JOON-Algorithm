const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(__dirname + '/input.txt').toString().trim().split('\n');

solution(input[0]);

function solution(n) {
    let sum =0;
    for(let i=1; i<=n; i++) {
        sum += i;
    }
    console.log(sum)
}