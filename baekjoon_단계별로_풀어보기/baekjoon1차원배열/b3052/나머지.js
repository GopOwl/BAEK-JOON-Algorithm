const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(__dirname + '/input.txt').toString().split('\n');

const num = input.map(value => +value);

solution(num);

function solution(num) {
    const answer = new Array(42).fill(0);
    for(let i =0; i< 10; i++) {
        const nowchar = +num[i] % 42;
        answer[nowchar]++;
    }
    let count = 0;
    for (let i=0; i<answer.length; i++) {
        if(answer[i] !== 0) {
            count++;
        }
    }
    console.log(count);
}