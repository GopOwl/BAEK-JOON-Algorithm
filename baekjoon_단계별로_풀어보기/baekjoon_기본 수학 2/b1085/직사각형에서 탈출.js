const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(__dirname + '/input.txt').toString().trim().split('\n');

input = input[0].split(' ').map(value => +value);
solution(input[0], input[1], input[2], input[3]);

function solution(x, y, w, h) {
    const arr = [w - x, h - y, x, y];
    const result = Math.min(...arr);
    console.log(result);
} 