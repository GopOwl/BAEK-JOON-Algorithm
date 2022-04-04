const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(__dirname + '/input.txt').toString().trim().split('\n');

const testCaseArray = [];
for (let i = 0; i < input.length; i++) {
    testCaseArray.push(input[i].split(' ').map(value => +value).sort((a,b) => a-b));
} 

solution(testCaseArray);

function solution(testCaseArray) {
    let a = testCaseArray[0][0];
    let b = testCaseArray[0][1];
    let c = testCaseArray[0][2];
    let i = 0;
    for (i = 0; i < input.length; i++) {
        a = testCaseArray[i][0];
        b = testCaseArray[i][1];
        c = testCaseArray[i][2];
        if (a === 0 && b === 0 && c === 0) {
            break;
        }
        if (a ** 2 + b ** 2 === c ** 2) {
            console.log('right');
        }
        else {
            console.log('wrong');
        }
    }
}