const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(__dirname + '/input.txt').toString().split('\n');

const testArray = input[1].split(' ').map(value => +value);

solution(+input[0], testArray);

function solution(N, A) {
    let ans = 0;
    for (let i = 0; i < N; i++) {
        if (A[i] < 2) { // 1은 소수가 아니기 때문에 
            continue;
        }
        else {
            let cnt = 0;
            for (let j = 2; j < A[i]; j++) {
                if (A[i] % j === 0) {
                    cnt++;
                }
            }
            if (cnt === 0) {
                ans++;
            }
        }
    }
    console.log(ans);
}