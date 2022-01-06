const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(__dirname + '/input.txt').toString().split('\n');

input = input[0];
input = input.split(' ').map(value => +value);

solution(input[0],input[1]);

function solution(H,M) {
    let cm = M-45;
    let ch = H-1;
    if (H >= 0 && M >= 45 ) {
        console.log(H,cm);
    }
    else if (H > 0 && M < 45 ) {
        console.log(ch,cm+60)
    }
    else if (H === 0 && M < 45) {
        console.log(23,cm+60)
    }

}