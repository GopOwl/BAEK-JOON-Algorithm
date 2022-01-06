const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(__dirname + '/input.txt').toString().split('/n');

input = input[0];
input = input.split(' ').map(value => +value);

solution(input[0], input[1]);

function solution(a,b) {
    if (a > b) {
        console.log('>')
    }
    else if (a < b) {
        console.log('<')
    }
    else {
        console.log('==')
    }
}