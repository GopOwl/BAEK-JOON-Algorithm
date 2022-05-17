const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(__dirname + '/input.txt').toString().trim().split('\n');

solution(+input[0]);

function solution(N) {
    for (let i = 0; i < N; i++) {
        let result = '';
        for (let j = N; j >= N - i; j--) {
            result += '*'
        }
        for(let j=0; j<(2*N)-(2*(i+1)); j++) {
            result += ' ';
        }
        for (let j = N; j >= N - i; j--) {
            result += '*'
        }
        console.log(result)
    }
    for(let i=1; i<N; i++) {
        let result2 = ''
        for(let j=0; j<N-i; j++) {
            result2 += '*'
        }
        for(let j=0; j<(2*i); j++) {
            result2 += ' ';
        }
        for(let j=0; j<N-i; j++) {
            result2 += '*'
        }
        console.log(result2)
    }
}