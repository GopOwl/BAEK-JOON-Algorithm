const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(__dirname + '/input.txt').toString().split('\n');

const arrlength = +input[0];
const score = [];
for (let i=1; i <= arrlength; i++) {
    const arr = input[i].split(' ');
    score.push({ N: +arr[0] , arr : arr.slice(1).map(value => +value)});
}


solution(arrlength,score);

function solution(C,score) {   
    for(let i=0; i<C; i++) {
        const item = score[i];
        let average = 0;
        for(let j=0; j<item.N; j++) {
            average += item.arr[j];
        }
        average /= item.N;

        let count = 0;
        for(let j=0; j<item.N; j++) {
            if(average < item.arr[j]) { // 평균보다 점수가 더 큰지 알아보는 if문 
                count++;
            }
        }
        
        let ans = count/item.N; // 평균을 넘는 학생들 비율을 구하는 식 (평균보다 점수가 더 높은수 나누기 학생의 수 )
        console.log((ans*100).toFixed(3) + '%');
    }
    
}