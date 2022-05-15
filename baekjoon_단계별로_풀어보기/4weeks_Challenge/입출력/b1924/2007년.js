const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(__dirname + '/input.txt').toString().trim().split('\n');

input = input[0].split(' ').map(value => +value)

solution(input[0], input[1]);

function solution(x, y) {
    const week = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    let result = 0;
    for (let i = 1; i < x; i++) {
        result += months[i - 1];
    }
    result += y;
    console.log(week[result % 7])
}