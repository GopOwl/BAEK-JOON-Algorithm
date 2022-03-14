const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(__dirname + '/input.txt').toString().split('\n');

input = input[0].split(' ');

solution(input[0],input[1]);

function solution(A,B) {
    A = BigInt(input[0]);
    B = BigInt(input[1]);
    let ans = A+B;
    console.log(ans.toString());
}