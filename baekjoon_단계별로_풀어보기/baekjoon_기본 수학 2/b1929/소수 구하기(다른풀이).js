const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(__dirname + '/input.txt').toString().split('\n');

input = input[0].split(' ').map(value => +value);

solution(input[0], input[1]);

function solution(M, N) {
    let isPrimeNum = Array(N + 1).fill(true);
    isPrimeNum[0] = isPrimeNum[1] = false;
    for (let i = 2; i <= Math.ceil(Math.sqrt(N)); i++) {
        if (isPrimeNum[i]) {
            let m = 2;
            while (i * m <= N) {
                isPrimeNum[i * m] = false;
                m++;
            }
        }
    }
    const result = [];
    for (let i = M; i <= N; i++) {
        if (isPrimeNum[i]) {
            result.push(i);
        }
    }
    console.log(result.join('\n'));
}