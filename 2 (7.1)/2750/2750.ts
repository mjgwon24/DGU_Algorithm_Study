// N개의 수가 주어졌을 때, 이를 오름차순 정렬
// 첫재쭐 N에 수가 주어지고, 둘째 줄부터 N개의 수가 주어진다.

const inputs = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const N = parseInt(inputs[0]);
// numbers 배열 생성
const numbers = [];

for (let i = 1; i < N+1; i++) {
    numbers[i-1] = inputs[i];
}

// numbers 배열을 오름차순 정렬
numbers.sort((a, b) => a - b);

// numbers 배열 출력
console.log(numbers.join('\n'));