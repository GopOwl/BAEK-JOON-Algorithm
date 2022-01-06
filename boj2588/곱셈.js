const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(__dirname + '/input.txt').toString().split('/n');

input = input[0];
input = input.split('\n').map(value => +value);

solution(input[0],input[1]);

function solution(a,b) {
    const sb = String(b);
    const one = sb[2];
    const ten = sb[1];
    const hun = sb[0];
    console.log(a*sb[2]);
    console.log(a*sb[1]);
    console.log(a*sb[0]);
    console.log(a*b);
}