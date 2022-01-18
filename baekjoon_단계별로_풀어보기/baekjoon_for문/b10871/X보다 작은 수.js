const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(__dirname + '/input.txt').toString().split('\n');

const [inputN, inputX] = input[0].split(' ').map(value => +value);
const nArray = input[1].split(' ').map(value => +value);

solution(inputN,inputX,nArray);

function solution(N,X,A) {
    const answerArray = [];
    for (let i =0; i<N; i++) {
        if (A[i] < X) {
            answerArray.push(A[i]);
        }
    }
    console.log(answerArray.join(' '))
}