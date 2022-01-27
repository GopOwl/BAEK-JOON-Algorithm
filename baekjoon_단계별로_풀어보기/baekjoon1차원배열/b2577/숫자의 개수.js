const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(__dirname + '/input.txt').toString().split('\n');

const items = input.map(value => +value);

solution(items[0],items[1],items[2]);

function solution(A,B,C) {
    let result = String(A*B*C);
    for (let i=0; i <= 9; i++) {
        let count = 0;
        for(let j = 0; j < result.length; j++) {
            if((result[j]) == i) {
                count++;
            }
        }
        console.log(count);
    }
    
}