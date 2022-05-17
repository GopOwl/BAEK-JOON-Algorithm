const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(__dirname + '/input.txt').toString().trim().split('\n');

solution(+input[0]);

function solution(N) {
    for(let i=0; i<N; i++) {
        let result = '';
        for(let j=N; j>N-i; j--) {
            result += ' '
        }
        for(let j=1; j<=N-i; j++) {
            result += '*'
        }
        console.log(result)
    }
}