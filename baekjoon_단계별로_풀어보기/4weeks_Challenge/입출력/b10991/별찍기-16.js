const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(__dirname + '/input.txt').toString().trim().split('\n');

solution(+input[0]);

function solution(N) {
    for(let i=1; i<=N; i++) {
        let result ='';
        for(let j=1; j<=N-i; j++) {
            result += ' '
        }
        for(let j=0; j<i; j++) {
            result += '*'
            result += ' '
            // result += '* ' 이렇게 별표시 옆에 한칸 띄어서 한줄로 할수도 있다 
        }
        console.log(result)
    }
}