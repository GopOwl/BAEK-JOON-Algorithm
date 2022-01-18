const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(__dirname + '/input.txt').toString().split('\n');

solution(+input[0]);

function solution(N) {
    for (let line = 1; line <= N; line++) {
        const star = line;
        const space = N - line;
        let printString = '';
        for (let i =0; i<space; i++) {
            printString += ' ';
        }
        for (let i =0; i<star; i++) {
            printString += '*';
        }
        console.log(printString);
    }
}