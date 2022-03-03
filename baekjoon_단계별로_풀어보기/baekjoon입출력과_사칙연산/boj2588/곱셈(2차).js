const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(__dirname + '/input.txt').toString().split('\n');

// solution(input[0],input[1]);

// function solution(a, b) {
//     for (let i = 2; i >= 0; i--) {
//         console.log(a * b[i])
//     }
//     console.log(a * b);
// } 
// for 문을 이용해서 풀었을때 

input = input.map(value => +value);

solution(input[0], input[1]);

function solution(a, b) {
    const sb = String(b);
    const one = +sb[2];
    const ten = +sb[1];
    const hun = +sb[0];
    console.log(a * one);
    console.log(a * ten);
    console.log(a * hun);
    console.log(a * b);
}