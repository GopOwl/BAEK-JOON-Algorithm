const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(__dirname + '/input.txt').toString().trim().split('\n');

const testcase = [];
for(let i=0; i<input.length; i++) {
    testcase.push(input[i].split(','));
}
solution(testcase);

function solution(testcase) {
    for(let i=0; i<testcase.length; i++) {
        console.log(String(testcase[i]))    
    }
}