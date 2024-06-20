// 전공평점 계산

const gradePoint = {
    "A+": 4.5,
    "A0": 4.0,
    "B+": 3.5,
    "B0": 3.0,
    "C+": 2.5,
    "C0": 2.0,
    "D+": 1.5,
    "D0": 1.0,
    "F": 0.0
};
let total = 0;
let totalCredits = 0;
let yourGPA = 0;

for (let i = 0; i < 20; i++) {
    const inputs = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
    let input = inputs[i].split(' ');

    if (input[2] == 'P') {
        continue;
    }
    total += parseFloat(input[1]) * gradePoint[input[2]];
    totalCredits += parseFloat(input[1]);
}

yourGPA = total / totalCredits;

console.log(yourGPA.toFixed(6));

/**
 * - toFixed(): 숫자를 지정된 소수점 자리수까지 반올림하여 문자열로 반환
 */