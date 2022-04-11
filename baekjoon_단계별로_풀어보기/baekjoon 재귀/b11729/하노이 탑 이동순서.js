const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(__dirname + '/input.txt').toString().trim().split('\n');

let cnt = 0;
let ans = '';

function solution(N,from,to,other) {
    if(N===0) {
        return;
    }
    solution(N-1,from,other,to);
    ans += `${from} ${to}` + '\n';
    cnt++;
    solution(N-1,other,to,from);
}

solution(+input[0],1,3,2);
console.log(cnt);
console.log(ans);