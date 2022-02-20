const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(__dirname + '/input.txt').toString().split('\n');

solution(input[0]);

function solution(str) {
    let obj = {};
    for(let i =0; i<str.length; i++) { //각 문자가 몇개 있는지 확인하는 문장
        let nowChar = str[i].toUpperCase();
        if(obj[nowChar]) { 
            obj[nowChar]++;
        }
        else {
            obj[nowChar] = 1;
        }
    }
    let maxValue = -1;
    let maxChar = '';
    let isDuplicated = false;
    for(const el in obj) { //위에 obj 객체를 돌기위해 for-in 문법을 사용해서 객체에 있는 키값을 꺼내준다
        if(obj[el] > maxValue) {
            maxValue = obj[el];
            maxChar = el;
            isDuplicated = false;
        }
        else if (obj[el] === maxValue) { // 현재 키값의 최대값과 비교하는 값이 같다면 중복이라고 보고 ? 출력
            isDuplicated = true;
        }
    }
    if(isDuplicated) {
        console.log('?');
    }
    else {
        console.log(maxChar);
    }
}