const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(__dirname + '/input.txt').toString().trim().split('\n');

const testcase = [];
for (let i = 1; i <= +input[0]; i++) {
    testcase.push(input[i].split(' ').map(value => +value));
}

solution(+input[0], testcase);

function solution(T, testcase) {
    // for (let i = 0; i < T; i++) {
    //     let x1 = testcase[i][0];
    //     let y1 = testcase[i][1];
    //     let r1 = testcase[i][2];
    //     let x2 = testcase[i][3];
    //     let y2 = testcase[i][4];
    //     let r2 = testcase[i][5];
    //     let distance = Math.pow((x1 - x2), 2) + Math.pow((y1 - y2), 2);
    //     let rsum = (r1 + r2)**2;
    //     let rsub = (r1 - r2)**2;
    //     if (distance === 0 && r1===r2) {
    //         console.log(-1);
    //     }
    //     else if (rsub < distance && rsum > distance) {
    //         console.log(2);
    //     }
    //     else if (rsum === distance || rsub === distance) {
    //         console.log(1);
    //     }
    //     else if (rsum < distance || rsub > distance) {
    //         console.log(0);
    //     }
    // }
    for (let i = 0; i < T; i++) {
        let x1 = testcase[i][0];
        let y1 = testcase[i][1];
        let r1 = testcase[i][2];
        let x2 = testcase[i][3];
        let y2 = testcase[i][4];
        let r2 = testcase[i][5];
        let distance = Math.sqrt(Math.pow((x1 - x2), 2) + Math.pow((y1 - y2), 2));
        let rsum = r1 + r2;
        let rsub = Math.abs(r1 - r2);
        if (distance === 0 && rsub === 0) {
            console.log(-1);
        }
        else if (rsub < distance && rsum > distance) {
            console.log(2);
        }
        else if (rsum === distance || rsub === distance) {
            console.log(1);
        }
        else if (rsum < distance || rsub > distance) {
            console.log(0);
        }
    }
}