// input: A, B (자연수)
// output: A, B 사칙연산

const inputs = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');

const A = parseInt(inputs[0]);
const B = parseInt(inputs[1]);

console.log(A + B);
console.log(A - B);
console.log(A * B);
// Math.floor(): 소수점 이하를 버림
console.log(Math.floor(A / B));
console.log(A % B);

/*

- require('fs'): Node.js의 내장 모듈인 fs(File System) 모듈 사용
- readFileSync('/dev/stdin'): 동기적으로 파일을 읽어옴
- trim(): 문자열 양 끝의 공백 제거
- split(' '): 문자열을 공백을 기준으로 나눔

*/
