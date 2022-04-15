const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(__dirname + '/input.txt').toString().trim().split('\n');

solution(+input[0]);

function solution(N) {
    let start = N-(String(N).length*9);
    // let M = start;
    let ans;
    while(true) {
        start++;
        let sum = start;
        for(let i=0; i<String(start).length; i++) {
            sum = sum + Number(String(start).charAt(i));
        }
        if(sum === N) {
            ans = start;
            break;
        }
        if(start >= N) {
            ans = 0;
            break;
        }
    }
    console.log(ans);
}