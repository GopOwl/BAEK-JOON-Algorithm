const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(__dirname + '/input.txt').toString().split('\n');

input = input[0].split(' ').map(value => +value);

solution(input[0], input[1], input[2]);

function solution(A, B, C) {
    if (C-B <= 0) {
        console.log(-1);
    }
    else {
        let N = A / (C - B);
        let sell = Math.floor(N) + 1; 
        console.log(sell);
    }
}