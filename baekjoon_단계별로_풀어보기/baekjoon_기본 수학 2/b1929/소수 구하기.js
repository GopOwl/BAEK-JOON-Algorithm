const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(__dirname + '/input.txt').toString().split('\n');

input = input[0].split(' ').map(value => +value);

solution(input[0], input[1]);

function solution(M, N) {
    let result = [];
    for (let i = M; i <= N; i++) {
        for (let j = 2; j <= i; j++) {
            if (j * j > i) {
                result.push(i);
                break;
            }
            if (i % j === 0) {
                break;
            }
        }
    }
    console.log(result.join('\n'));
}