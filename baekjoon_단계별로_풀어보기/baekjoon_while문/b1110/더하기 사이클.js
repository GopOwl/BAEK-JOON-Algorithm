const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(__dirname + '/input.txt').toString().split('\n');


solution(+input[0]);

function solution(N) {
    let makeNum = N;
    let sum;
    let count = 0;
    while(makeNum !== N || count === 0) {
        count++;
        sum = Math.floor(makeNum/10) + (makeNum % 10);
        makeNum = (makeNum % 10) * 10 + (sum % 10);

        if (makeNum === N) {
            break;
        }
    }
    console.log(count);
}