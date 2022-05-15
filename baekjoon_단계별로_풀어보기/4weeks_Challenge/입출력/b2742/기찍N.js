const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(__dirname + '/input.txt').toString().trim().split('\n');

solution(+input[0]);

function solution(N) {
    let result = ''
    for(let i=N; i>0; i--) {
        result += i + '\n'
    }
    console.log(result)
}