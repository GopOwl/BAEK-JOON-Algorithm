const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(__dirname + '/input.txt').toString().split('\n');

const testcaseArray = [];
for (let i = 1; i <= +input[0].length; i++) {
    const hotelValue = input[i].split(' ').map(value => +value);
    testcaseArray.push({ H: hotelValue[0], W: hotelValue[1], N: hotelValue[2] })
}
solution(+input[0], testcaseArray);

function solution(T, testcaseArray) {
    for (let i = 0; i < T; i++) {
        let Hotel = testcaseArray[i].H;
        // const Wall = testcaseArray[i].W;
        let Num = testcaseArray[i].N;
        let room = 1;
        while (Num > Hotel) {
            room++;
            Num = Num - Hotel;
        }
        if (room < 10) {
            console.log(`${Num}0${room}`);
        } 
        else {
            console.log(`${Num}${room}`);
        }
    }
}