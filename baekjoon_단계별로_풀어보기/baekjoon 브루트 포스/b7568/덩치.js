const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(__dirname + '/input.txt').toString().trim().split('\n');

const testcase = [];
let result = [];
for(let i=1; i<=+input[0]; i++) {
    testcase.push(input[i].split(' ').map(value => +value));
}

solution(+input[0],testcase);

function solution(N,testcase) {
	for (let i = 0; i < N; i++) {
		let grade = 1;
		for (let j = 0; j < N; j++) {
			if (i !== j) {
				if (testcase[i][0] < testcase[j][0] && testcase[i][1] < testcase[j][1]) 
				grade++;
			}
		}
		result.push(grade);
	}
	
	console.log(result.join(" "));
}

