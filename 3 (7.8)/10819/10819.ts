/**
 * 차이를 최대로
 * 문제: N개의 정수로 이루어진 배열 A가 주어진다. 이때, 배열에 들어있는 정수의 순서를 적절히 바꿔서 다음 식의 최댓값을 구하는 프로그램을 작성하시오.
 * |A[0] - A[1]| + |A[1] - A[2]| + ... + |A[N-2] - A[N-1]|
 * 입력: 첫째 줄에 N(3 ≤ N ≤ 8)이 주어진다. 둘째 줄에는 배열 A에 들어있는 수가 주어진다. 배열에 들어있는 수는 -100보다 크거나 같고, 100보다 작거나 같다.
 * 출력: 배열 A에 들어있는 수를 적절히 섞어서 만들 수 있는 수열 S의 '차이'를 최대로 출력한다.
 *
 * [문제풀이 알고리즘]
 * 재귀함수를 통해 순열 생성 후, 순열이 완성되면 차이 계산
 * 차이를 계산해, 최대값 반환
 */

const inputs = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const N = parseInt(inputs[0]);
const A = inputs[1].split(' ').map(v => parseInt(v));
let max = -1;   // 최대값 (최소값으로 초기화)

// 배열의 두 요소 위치 변경
function swap(arr, i, j) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

// 순열 생성
function perm(arr, depth, n, k) {
    // 순열이 완성되면 차이 계산
    if (depth === k) {
        let sum = 0;
        for (let i = 0; i < n - 1; i++) {
            sum += Math.abs(arr[i] - arr[i + 1]);
        }
        max = Math.max(max, sum);
        return;
    }

    // 재귀함수를 통해 순열 생성
    for (let i = depth; i < n; i++) {
        swap(arr, i, depth);
        perm(arr, depth + 1, n, k);
        swap(arr, i, depth);
    }
}

perm(A, 0, N, N);
console.log(max);
