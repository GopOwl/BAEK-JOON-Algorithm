const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(__dirname + '/input.txt').toString().trim().split('\n');

const testcase = [];
for (let i = 0; i < input.length; i++) {
    testcase.push(input[i].split(' ').map(value => +value))
}
solution(testcase);

function solution(testcase) {
    for (let i = 0; i < input.length; i++) {
        const A = testcase[i][0];
        const B = testcase[i][1];
        if (A + B === 0) {
            break;
        }
        if (A === 0 && B === 0) { // 라매개발자 유튜브 
            break;
        }
        console.log(A + B)
    }
}