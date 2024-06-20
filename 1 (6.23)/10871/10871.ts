// 정수 N개로 이루어진 수열A에서 X보다 작은 수 구하기

const inputs = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const input1 = inputs[0].split(' ');
const input2 = inputs[1].split(' ');

const N = parseInt(input1[0]);
const X = parseInt(input1[1]);

const A = input2.map((element) => parseInt(element));

for (let i = 0; i < N; i++) {
    if (A[i] < X) {
        process.stdout.write(`${A[i]} `);
    }
}

/**
 * - require('fs'): Node.js의 내장 모듈인 fs(File System) 모듈 사용
 * - readFileSync('/dev/stdin'): 동기적으로 파일을 읽어옴
 * - trim(): 문자열 양 끝의 공백 제거
 * - map(): 배열의 모든 요소에 대해 주어진 함수를 호출한 결과를 모아 새로운 배열 반환
 * - process.stdout.write(): 표준 출력 스트림으로 데이터를 출력
 * - ${}: 템플릿 리터럴을 이용해 문자열과 변수 결합
**/