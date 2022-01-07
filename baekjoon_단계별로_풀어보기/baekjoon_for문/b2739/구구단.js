const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(__dirname + '/input.txt').toString().split('\n');

solution(+input[0])

function solution(N) {
    for (let a = 1; a <= 9; a++ ) {
        // console.log(`${N} * ${a} = ${N*a}`);
        console.log(N , '*' , a , '=' , (N*a));
    }
}