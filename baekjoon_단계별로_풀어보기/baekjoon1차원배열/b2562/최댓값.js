const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(__dirname + '/input.txt').toString().split('\n');

const items = input.map(value => +value);

solution(items);

function solution(items) {
    let max = 0;
    let ans = 0;
    for(let i=0; i<9; i++) {
        if (max < items[i]) {
            max = items[i];
            ans = i;
        }
    }
    console.log(max);
    console.log(ans+1);
}