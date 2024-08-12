/**
 * 연산자 끼워넣기
 * 문제: N개의 수와 N-1개의 연산자가 주어졌을 때, 만들 수 있는 식의 결과가 최대인 것과 최소인 것을 구하는 프로그램을 작성하시오.
 * 입력: 첫째 줄에 수의 개수 N(2 ≤ N ≤ 11)가 주어진다. 둘째 줄에는 A1, A2, ..., AN이 주어진다. (1 ≤ Ai ≤ 100) 셋째줄에는 합이 N-1인 4개의 정수가 주어지는데, 차례대로 덧셈(+)의 개수, 뺄셈(-)의 개수, 곱셈(×)의 개수, 나눗셈(÷)의 개수이다.
 * 출력: 첫째 줄에 만들 수 있는 식의 결과의 최댓값을, 둘째 줄에는 최솟값을 출력한다.
 */

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const N = Number(input[0]);
const nums = input[1].split(' ').map(Number);
const operator = input[2].split(' ').map(Number);
let max = -Infinity;
let min = Infinity;

const calc = (num, idx, add, sub, mul, div) => {
  if (idx === N) {
    max = Math.max(max, num);
    min = Math.min(min, num);
    return;
  }
  if (add) calc(num + nums[idx], idx + 1, add - 1, sub, mul, div);
  if (sub) calc(num - nums[idx], idx + 1, add, sub - 1, mul, div);
  if (mul) calc(num * nums[idx], idx + 1, add, sub, mul - 1, div);
  if (div) calc(parseInt(num / nums[idx]), idx + 1, add, sub, mul, div - 1);
};

calc(nums[0], 1, ...operator);
console.log(max);
console.log(min);