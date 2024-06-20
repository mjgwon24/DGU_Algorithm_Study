// 연도가 윤년이면 1, 아니면 0 출력

const year = require('fs').readFileSync('/dev/stdin').toString().trim();

if (year % 4 == 0 && (year % 100 != 0 || year % 400 == 0 )) {
    console.log(1);
} else {
    console.log(0);
}
