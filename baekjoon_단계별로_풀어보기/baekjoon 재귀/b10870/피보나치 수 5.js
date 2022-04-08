const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(__dirname + '/input.txt').toString().trim().split('\n');

function solution(n) {
    if(n < 2) {
        return n;
    }
    else {
        return solution(n-1) + solution(n-2);
    }
}
console.log(solution(+input[0]));