const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(__dirname + '/input.txt').toString().split('\n');

let splitInput = input[0].split(' ');

const reversePrint = (str) => {
    let output = '';
    for (let i = 2; i>= 0; i--) {
        output += str[i]; // 숫자를 거꾸로 배치하는 과정 
    }
    console.log(output);
}

solution(splitInput[0],splitInput[1]);

function solution(A,B) {
    for (let i=2; i>=0; i--) { // 숫자를 맨 뒤부터 비교해야하기 때문에 
        let nowA = A[i];
        let nowB = B[i];
        if (nowA > nowB) {
            reversePrint(A);
            return;
        }
        else if (nowA < nowB) {
            reversePrint(B);
            return;
        }
    }
}