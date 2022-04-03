const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(__dirname + '/input.txt').toString().trim().split('\n');

input.pop();

solution();

function solution() {
    for (let i = 0; i < input.length; i++) {
        let n = Number(input[i]);
        let L = n * 2;
        let isPrimeNum = Array(L + 1).fill(true);
        isPrimeNum[0] = isPrimeNum[1] = false;

        for (let i = 2; i <= Math.ceil(Math.sqrt(L)); i++) {
            if (isPrimeNum[i]) {
                let m = 2;
                while (i * m <= L) {
                    isPrimeNum[i * m] = false;
                    m++;
                }
            }
        }
        let result = [];
        for (let i = n + 1; i <= L; i++) {
            if (isPrimeNum[i]) {
                result.push(i);
            }
        }
        console.log(result.length);
    }
}