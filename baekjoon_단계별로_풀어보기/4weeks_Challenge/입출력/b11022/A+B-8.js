const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(__dirname + '/input.txt').toString().trim().split('\n');

const testcase = [];
for(let i =1; i<= +input[0]; i++) {
    testcase.push(input[i].split(' ').map(value => +value));
}
solution(+input[0],testcase);

function solution(T,testcase) {
    for(let i=0; i<T; i++) {
        const A = testcase[i][0];
        const B = testcase[i][1];
        console.log(`Case #${i+1}: ${A} + ${B} = ${A+B}`);
    }
}