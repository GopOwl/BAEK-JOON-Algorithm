const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(__dirname + '/input.txt').toString().trim().split('\n');

solution();

function solution() {
    for(let i=0; i<input.length; i++) {
        console.log(input[i])    
    }
} // 첫번째 풀이 그전 문제와 유사하게 푼 문제 

// console.log(require('fs').readFileSync('/dev/stdin').toString() 2번째 풀이 그전 문제에 똑같이 제출해도 맞았다고 나온다.


// const fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString();

// console.log(input) 3번째 풀이 그전 문제에 똑같이 제출해도 맞았다고 나온다.