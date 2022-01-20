const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(__dirname + '/input.txt').toString().split('\n');

const testcaseArray = [];
for (let i = 0; ; i++) {
    const tempValue = input[i].split(' ').map(value => +value);
    testcaseArray.push({A : tempValue[0], B : tempValue[1]});
    if (tempValue[0] === 0 && tempValue[1] === 0) {
        break;
    }
}

solution(testcaseArray);

function solution(testcaseArray) {
    let A = testcaseArray[0].A;
    let B = testcaseArray[0].B;
    let idx = 1;
    while(A !== 0 || B !== 0) {
        console.log(A+B);
        A = testcaseArray[idx].A;
        B = testcaseArray[idx].B;
        idx++;
    }
}