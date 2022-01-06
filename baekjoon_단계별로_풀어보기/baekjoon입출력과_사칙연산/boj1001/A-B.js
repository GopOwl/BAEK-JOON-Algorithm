const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(__dirname + '/input.txt').toString().split('\n');

input = input[0];
input = input.split(' ').map(value => +value);

minus(input[0], input[1]);

function minus(a,b) {
    console.log(a-b);
}