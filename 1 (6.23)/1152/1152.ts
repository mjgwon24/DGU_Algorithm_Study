// 문자열의 단어 개수 세기

let count = 0;
const inputs = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');

for (let i = 0; i < inputs.length; i++) {
    if (inputs[i] !== '') {
        count++;
    }
}

console.log(count);