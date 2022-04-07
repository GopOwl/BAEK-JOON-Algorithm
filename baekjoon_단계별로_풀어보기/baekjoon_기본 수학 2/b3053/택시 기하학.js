const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(__dirname + '/input.txt').toString().trim().split('\n');

solution(+input[0]);

function solution(R) {
    console.log(((R**2)*Math.PI).toFixed(6))
    console.log((R**2)*2)
}