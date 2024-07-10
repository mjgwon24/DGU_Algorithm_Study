/**
 * 색종이 만들기
 * 문제:
 * 종이의 크기가 N*N이고, 각 칸에는 0 또는 1이 적혀있다.
 * 전체 종이가 모두 같은 색으로 칠해져 있지 않으면 종이를 N/2 * N/2로 자른다.
 * 이와 같이 종이를 잘라서 모두 같은 색으로 칠해져 있지 않으면, 같은 방식으로 자르기를 반복한다.
 * 입력:
 * 첫째 줄에는 2, 4, 8, 16, 32, 64, 128 중 하나인 N이 주어진다.
 * 둘째 줄부터 N개의 줄에는 종이의 각 가로줄의 정수(0, 1)가 주어진다. 각 숫자 사이에는 빈칸이 하나씩 존재한다.
 * 출력:
 * 첫째 줄에는 0으로 채워진 칸의 개수, 둘째 줄에는 1로 채워진 칸의 개수를 출력한다.
 */

/**
 * 문제풀이 알고리즘 - 쿼드트리
 * 1. 종이의 크기 N*N을 입력받는다.
 * 2. 종이의 각 가로줄의 정수를 입력받아 2차원 배열에 저장한다.
 * 3. divide 함수를 호출하여 종이를 등분한다.
 * 4. divide 함수는 종이의 가로세로 길이 N을 인자로 받아, 종이를 4등분하여 재귀적으로 검증한다.
 * 5. check 함수는 종이의 시작 x, y좌표와 가로세로 길이 N을 인자로 받아, 해당 범위의 값이 모두 같은지 검증한다.
 * 6. 모두 같은 값이면 해당 값의 개수를 증가시킨다.
 * 7. 모두 같은 값이 아니라면, 4등분하여 재귀적으로 검증한다.
 * 8. 최종적으로 0과 1의 개수를 출력한다.
 */

const inputs = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const N = parseInt(inputs[0]);
const paper = inputs.slice(1).map(v => v.split(' ').map(v => parseInt(v)));
let zero = 0, one = 0;

// 종이를 등분하여 재귀적으로 검증
function divide(x, y, N) {
    if (check(x, y, N)) {
        if (paper[x][y] === 0) zero++;
        else one++;
        return;
    }

    const half = N / 2;
    divide(x, y, half);
    divide(x, y + half, half);
    divide(x + half, y, half);
    divide(x + half, y + half, half);
}

// 종이의 시작 x, y좌표와 가로세로 길이 N을 인자로 받아, 해당 범위의 값이 모두 같은지 검증
function check(x, y, N) {
    const value = paper[x][y];
    for (let i = x; i < x + N; i++) {
        for (let j = y; j < y + N; j++) {
            if (paper[i][j] !== value) return false;
        }
    }
    return true;
}

divide(0, 0, N);
console.log(zero);
console.log(one);