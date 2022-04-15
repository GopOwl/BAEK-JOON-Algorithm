const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(__dirname + '/input.txt').toString().trim().split('\n');

const [inputA, inputB] = input[0].split(' ').map(value => +value);
const testcase = input[1].split(' ').map(value => +value);

solution(inputA, inputB, testcase);

function solution(inputA, inputB, testcase) {
    let max = 0;
    for (let i = 0; i < inputA; i++) {
        for (let j = i + 1; j < inputA; j++) {
            for (let k = j + 1; k < inputA; k++) {
                let sum = testcase[i] + testcase[j] + testcase[k];
                if (sum <= inputB && sum > max) {
                    max = sum;
                }
            }
        }
    }
    console.log(max);
}