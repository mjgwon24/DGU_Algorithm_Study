// 팩토리얼 함수 구현
// 0! = 1

const N = require('fs').readFileSync('/dev/stdin').toString().trim();

const factorial = (n) => {
    if (n == 0) return 1;
    return n * factorial(n - 1);
}

console.log(factorial(N));