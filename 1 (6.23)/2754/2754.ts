// 성적의 평점 출력

const grade = require('fs').readFileSync('/dev/stdin').toString().trim();

// 성적-학점 저장
const GPA = {
    "A+": 4.3,
    "A0": 4.0,
    "A-": 3.7,
    "B+": 3.3,
    "B0": 3.0,
    "B-": 2.7,
    "C+": 2.3,
    "C0": 2.0,
    "C-": 1.7,
    "D+": 1.3,
    "D0": 1.0,
    "D-": 0.7,
    "F": 0.0
}

console.log(GPA[grade].toFixed(1));

/**
 * - toFixed(): 숫자를 지정된 소수점 자리수까지 반올림하여 문자열로 반환
 */