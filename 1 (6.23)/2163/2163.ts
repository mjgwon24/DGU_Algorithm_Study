// N x M 크기의 사각형을 1 X 1 크기의 정사각형으로 쪼개기
// input: N, M (1 <= N, M <= 300)
// output: 쪼개는 최소 횟수

const inputs = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');

const N = parseInt(inputs[0]);
const M = parseInt(inputs[1]);

console.log(N * M - 1);

/*
N x M 크기의 사각형을 1 X 1 크기의 정사각형으로 쪼개기위한 최소 횟수:
가로를 쪼개는 횟수: M - 1
쪼개진 세로 각각을 쪼개는 횟수: (N - 1) * M
총 횟수: (N - 1) * M + (M - 1)

(N - 1) * M + (M - 1)
= N * M - M + M - 1
= N * M - 1
*/