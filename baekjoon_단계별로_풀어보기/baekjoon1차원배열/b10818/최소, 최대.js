const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(__dirname + '/input.txt').toString().split('\n');

const nArray = input[1].split(' ').map(value => +value);

solution(+input[0],nArray);

function solution(N,A) {
    let max = A[0];
    let min = A[0];
    for (let i = 0; i<N; i++) {
        if(max < A[i]) {
            max = A[i];
        }
        if(min > A[i]) {
            min = A[i];
        }
    }
    console.log(`${min} ${max}`);
}