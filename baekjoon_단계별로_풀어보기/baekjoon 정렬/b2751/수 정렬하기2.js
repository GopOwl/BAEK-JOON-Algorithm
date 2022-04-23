const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(__dirname + '/input.txt').toString().trim().split('\n');

const testcase = [];
for (let i = 1; i <= +input[0]; i++) {
    testcase.push(+input[i].split(' '));
}
testcase.sort((a, b) => a - b)

solution(+input[0], testcase);

function solution(N, testcase) {
    console.log(testcase.join('\n'))
}
// const n = +input[0];
// const testcase = input.filter((v,i)=> i>0).map((value) => +value);
// testcase.sort((a, b) => a - b);
// console.log(testcase.join('\n'));