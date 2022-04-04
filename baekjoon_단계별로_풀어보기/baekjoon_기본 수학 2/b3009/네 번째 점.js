const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(__dirname + '/input.txt').toString().trim().split('\n');

let testcaseX = [];
let testcaseY = [];
for(let i=0; i<3; i++) {
    testcaseX.push(+input[i].split(' ')[0]);
    testcaseY.push(+input[i].split(' ')[1]);
}
testcaseX =testcaseX.sort();
testcaseY =testcaseY.sort();

solution();

function solution() {
    let x;
    let y;
    x= testcaseX[1] === testcaseX[0] ? testcaseX[2] : testcaseX[0];
    y= testcaseY[1] === testcaseY[0] ? testcaseY[2] : testcaseY[0];
    console.log(`${x} ${y}`);
}