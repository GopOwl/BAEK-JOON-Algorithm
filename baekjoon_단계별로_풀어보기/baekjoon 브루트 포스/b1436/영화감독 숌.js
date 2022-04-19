const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(__dirname + '/input.txt').toString().trim().split('\n');

solution(+input[0]);

function solution(N) {
    let current = 666;    
    let cnt = 0;
    let ans = 0;
    while(true) {
        if(String(current).includes('666')) {
            cnt++;
            if(cnt === N) {
                ans = current;
                break;
            }
        }
        current++;
    }
    console.log(ans)
}