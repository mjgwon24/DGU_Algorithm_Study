// 주어진 수 N개 중에서 소수가 몇 개인지 찾아서 출력
// input: 4\n1 3 5 7, output: 3

const inputs = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const N = parseInt(inputs[0]);
const numbers = inputs[1].split(' ').map(Number);
let count = 0;

for (let i = 0; i < N; i++) {
    if (isPrime(numbers[i])) {
        count++;
    }
}

console.log(count);

function isPrime(num) {
    if (num < 2) {
        return false;
    }

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }

    return true;
}

/**
 * - Math.sqrt(): 주어진 숫자의 제곱근을 반환
 */