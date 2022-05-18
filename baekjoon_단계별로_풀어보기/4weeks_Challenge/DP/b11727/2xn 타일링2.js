const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(__dirname + '/input.txt').toString().trim().split('\n');

solution(+input[0]);

function solution(n) {
    const DP = new Array(n+1).fill(0);
    DP[1] = 1;
    DP[2] = 3;
    for(let i=3; i<=n; i++) {
        DP[i] = (DP[i-1] + DP[i-2] + DP[i-2]) % 10007;
    }
    console.log(DP[n])
}