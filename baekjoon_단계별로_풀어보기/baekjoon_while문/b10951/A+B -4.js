const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(__dirname + '/input.txt').toString().split('\n');

const testcaseArray = [];
for (let i =0; i < input.length; i++) {
    if (input[i] === '') {
        break;
    }
    const testValue = input[i].split(' ').map(value => +value);
    testcaseArray.push({A : testValue[0], B : testValue[1]});
}

solution(testcaseArray);

function solution(testcaseArray) {
    // let A = 0;
    // let B = 0;
    // let idx = 0;
    let A = testcaseArray[0].A;
    let B = testcaseArray[0].B;
    let idx = 0;
    while(idx !== testcaseArray.length) {
        A = testcaseArray[idx].A;
        B = testcaseArray[idx].B;
        console.log(A+B);
        idx++;
    }
}