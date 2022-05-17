const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(__dirname + '/input.txt').toString().trim().split('\n');

solution(+input[0]);

function solution(N) {
    for(let i=0; i<N; i++) {
        let result = '';
        for(let j=0; j<i; j++) {
            result += ' ';
        }
        for(let j=0; j<(2*N)-((2*i)+1); j++) {
            result += '*';
        }
        console.log(result)
    }
    for(let i=1; i<N; i++) {
        let result2 = '';
        for(let j=1; j<N-i; j++) {
            result2 += ' ';
        }
        for(let j=0; j<(2*i)+1; j++) {
            result2 += '*';
        }
        console.log(result2)
    }
}