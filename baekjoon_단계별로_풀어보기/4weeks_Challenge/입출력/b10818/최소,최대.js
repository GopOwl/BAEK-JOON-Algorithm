const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(__dirname + '/input.txt').toString().trim().split('\n');

const testcase = input[1].split(' ').map(value => +value)

solution(+input[0], testcase);

function solution(N, testcase) {
    let max = testcase[0];
    let min = testcase[0];
    for(let i=1; i<N; i++) {
        if(max < testcase[i]) {
            max = testcase[i];
        }
        if(min > testcase[i]) {
            min = testcase[i];
        }
    }
    console.log(`${min} ${max}`)
}