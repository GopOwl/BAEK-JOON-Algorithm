const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(__dirname + '/input.txt').toString().split('\n');

input = input.map(value => +value);

solution(input);

function solution(a) {
    if (a >= 90) {
        console.log('A');
    }
    else if (a >= 80) {
        console.log('B');
    }
    else if (a >= 70) {
        console.log('C');
    }
    else if (a >= 60) {
        console.log('D');
    }
    else {
        console.log('F');
    }

}