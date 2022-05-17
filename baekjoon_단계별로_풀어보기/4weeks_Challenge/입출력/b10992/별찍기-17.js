const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(__dirname + '/input.txt').toString().trim().split('\n');

solution(+input[0]);

function solution(N) {
    for (let i = 0; i < N - 1; i++) {
        let result = '';
        for (let j = 0; j < N - i - 1; j++) {
            result += ' '
        }
        result += '*'
        if (i != 0) {
            for (let j = 0; j < 2 * i - 1; j++) {
                result += ' '
            }
            result += '*'
        }
        console.log(result)
    }
    let result2 = '';
    for (let i = 0; i < (2 * N) - 1; i++) {
        result2 += '*'
    }
    console.log(result2)
}
