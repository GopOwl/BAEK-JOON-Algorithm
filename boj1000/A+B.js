const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(__dirname + '/input.txt').toString().split('/n');

input = input[0];
input = input.split(' ').map(value=>+value); // 정수로 변환 

plus(input[0],input[1]);

function plus(a,b) {
    console.log(a+b);
}