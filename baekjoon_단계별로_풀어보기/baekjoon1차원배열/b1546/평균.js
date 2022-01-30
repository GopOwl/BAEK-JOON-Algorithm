const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(__dirname + '/input.txt').toString().split('\n');

const sArray = input[1].split(' ').map(value => +value);

solution(+input[0],sArray);

function solution(N,sArray) {
    let M = 0;
    for (let i = 0; i<N; i++) {
        if (M < sArray[i]) {
            M = sArray[i]; 
        }
    } 
    let sum = 0;
    for (let i =0; i<N; i++) {
        let cNum = String(sArray[i]/M*100);
        sum += (+cNum); 
    }
    console.log(+sum/N);
}