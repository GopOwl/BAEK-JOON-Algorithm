const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(__dirname + '/input.txt').toString().trim().split('\n');

const testcase = [];
for (let i = 1; i <= +input[0]; i++) {
    testcase.push(input[i].split(' ').map(value => +value));
}

solution(+input[0], testcase);

function solution(N, testcase) {
    const answer = testcase.sort((a, b) => {
        if (a[0] === b[0]) {
            return a[1] - b[1];
        }
        else {
            return a[0] - b[0];
        }
    })
    console.log(answer.map(v => v.join(' ')).join('\n'))
}
