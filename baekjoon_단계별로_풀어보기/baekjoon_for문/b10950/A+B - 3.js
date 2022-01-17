const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(__dirname + '/input.txt').toString().split('\n');

const testcaseArray = [];
for(let i = 1; i <= +input[0]; i++) {
    // const tempValue = input[i].split(' ').map(value => +value);
    // testcaseArray.push({A : tempValue[0],B: tempValue[1]});
    testcaseArray.push(input[i].split(' ').map(value => +value));
}

solution(+input[0],testcaseArray);

function solution(T, testcaseArray) {
    for(let i = 0; i<T; i++) {
        // const A = testcaseArray[i].A;
        // const B = testcaseArray[i].B;
        const A = testcaseArray[i][0];
        const B = testcaseArray[i][1];
        console.log(A+B);
    }
}