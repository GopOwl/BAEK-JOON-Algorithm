const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(__dirname + '/input.txt').toString().split('\n');

input = input[0].split(' ').map(value => +value);

solution(input[0], input[1]);

function solution(H, M) {
    if (H >= 0 && M >= 45) {
        console.log(`${H} ${M - 45}`);
    }
    else if (H > 0 && M < 45) {
        console.log(`${H - 1} ${M - 45 + 60}`);
    }
    else if (H === 0 && M < 45) {
        console.log(`23 ${M - 45 + 60}`);
    }
}