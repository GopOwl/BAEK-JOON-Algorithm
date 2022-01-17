const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(__dirname + '/input.txt').toString().split('\n');

const testcaseArray = [];
for (let i =1; i <= +input[0]; i++) {
    testcaseArray.push(input[i].split(' ').map(value => +value));
}

solution(+input[0],testcaseArray);

function solution(T,testcaseArray) {
    for (let i = 0; i<T; i++){
        const A = testcaseArray[i][0];
        const B = testcaseArray[i][1];
        console.log(A+B);
    }
    
}