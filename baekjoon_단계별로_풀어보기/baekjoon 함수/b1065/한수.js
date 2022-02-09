const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(__dirname + '/input.txt').toString().split('\n');

solution(+input[0]);

function f(num) {
    const strNum = String(num);
    if (strNum.length <= 2) {
        return true;
    }
    const diff = +strNum[1] - +strNum[0];
    let beforeNum = +strNum[1];
    for (let i =2; i<strNum.length; i++) {
        if(strNum[i] - beforeNum !== diff) {
            return false;
        }
        beforeNum = +strNum[i];
    } 
    return true;
}

function solution(N) {
    let cnt = 0;
    for(let i = 1; i<=N; i++) {
        if(f(i)) {
            cnt++;
        } // 이 if문 의미가 만약 i가 한수라면 이라는데 이해가 안간다.. (정정 저 함수부분이 애초에 한수가 아니라면 결과가 안나오기 때문에 이게 맞다)
    }
    console.log(cnt);
}