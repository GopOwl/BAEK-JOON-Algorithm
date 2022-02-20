const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(__dirname + '/input.txt').toString().split('\n');

solution(input[0]);

function solution(str) {
    let ans = 0;
    for (let i = 0; i<str.length; i++) {
        let c = str[i];
        console.log(c)
        if(c >= 'W') {
            ans += 10;
        }
        else if (c >= 'T') {
            ans += 9;
        }
        else if (c >= 'P') {
            ans += 8;
        }
        else if (c >= 'M') {
            ans += 7;
        }
        else if (c >= 'J') {
            ans += 6;
        }
        else if (c >= 'G') {
            ans += 5;
        }
        else if (c >= 'D') {
            ans += 4;
        }
        else if (c >= 'A') {
            ans += 3;
        }
    }
    console.log(ans);
}