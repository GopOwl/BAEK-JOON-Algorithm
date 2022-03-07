const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(__dirname + '/input.txt').toString().split('\n');

const [inputA, inputB] = input[0].split(' ').map(value => +value);
const inputC = input[1].split('\n').map(value => +value);

solution(inputA, inputB, +inputC);

function solution(A, B, C) {
    let cMin = (B + C) % 60
    let cHour = Math.floor((B + C) / 60)
    if (A >= 0 && (B + C) < 60) {
        console.log(A, (B + C));
    }
    else if (A+cHour >= 24 && (B + C) >= 60) {
        console.log((A+cHour)-24,cMin)
    }
    else if (A >= 0 && (B + C) >= 60) {
        console.log((A+cHour),cMin);
    }
}   