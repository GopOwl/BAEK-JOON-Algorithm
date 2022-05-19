const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(__dirname + '/input.txt').toString().trim().split('\n');

const testcase = [];
for (let i = 1; i <= +input[0]; i++) {
    testcase.push(input[i].split(' ').map(value => +value));
}

solution(+input[0], testcase);

function solution(T, testcase) {
    const DP = [0, 1, 2, 4];
    for (let i = 0; i < T; i++) {
        for (let j = 4; j <= testcase[i]; j++) {
            DP[j] = DP[j - 1] + DP[j - 2] + DP[j - 3];
        }
        console.log(DP[testcase[i]])
    }
}