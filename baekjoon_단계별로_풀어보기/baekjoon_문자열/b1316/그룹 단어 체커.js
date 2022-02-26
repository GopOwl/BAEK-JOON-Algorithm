const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(__dirname + '/input.txt').toString().split('\n');


solution(+input[0],input.slice(1));

function solution(N,arr) {  
    let answer = 0;
    for (let i =0; i<N; i++) {
        let nowS = arr[i];

        let obj = {};

        let nowContC = nowS[0];
        obj[nowContC] = true; // 객체 접근 방법: 변수로 접근하는 방법  객체[key] 방식은 key가 따옴표로 감싸져 있지 않으면 변수로 해석해서 참조한다.

        let isGroupWord = true;
        for (let j = 1; j<nowS.length; j++) {
            if (nowContC !== nowS[j]) { // 단어가 연속하지 않다면
                if (obj[nowS[j]]) { // 연속하지 않는데 예전에 등장한적이 있는 문자라면
                    isGroupWord = false;
                }
                else { // 연속하지 않지만 등장한적도 없다면 그 단어를 객체에 넣어주는 문장
                    nowContC = nowS[j];
                    obj[nowS[j]] = true;
                }
            }
        }
        if (isGroupWord) {
            answer++;
        }
    }
    console.log(answer); 
}