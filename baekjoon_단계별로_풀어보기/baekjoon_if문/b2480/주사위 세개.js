const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(__dirname + '/input.txt').toString().split('\n');

input = input[0].split(' ').map(value => +value);

solution(input[0], input[1], input[2]);

function solution(a, b, c) {
    if (a === b && b === c && c === a) {
        console.log(10000 + (a * 1000));
    }
    else if (a === b || b === c || c === a) {
        if (a === b) {
            console.log(1000 + (a * 100));
        }
        else if (b === c) {
            console.log(1000 + (b * 100));
        }
        else if (a === c) {
            console.log(1000 + (c * 100));
        }
    }
    else if (a !== b && b !== c && c !== a) {
        if (a > b && a > c) {
            console.log(a * 100);
        }
        else if (b > a && b > c) {
            console.log(b * 100);
        }
        else if (c > a && c > b) {
            console.log(c * 100);
        }
    }
}