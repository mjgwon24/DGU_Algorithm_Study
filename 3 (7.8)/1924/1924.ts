/**
 * 2007년
 * 문제: 2007년 x월 y일은 무슨 요일인지 구하라
 * 입력: x, y (1 ≤ x ≤ 12, 1 ≤ y ≤ 31)
 * 출력: MON, TUE, WED, THU, FRI, SAT, SUN
 */

const inputs = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');
const x = parseInt(inputs[0]);
const y = parseInt(inputs[1]);
const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
const date = new Date(`2007-${x}-${y}`);

console.log(days[date.getDay()]);

/**
 * - new Date(): Date 객체 생성
 * - getDay(): 요일 반환 (0: 일요일, 1: 월요일, 2: 화요일, 3: 수요일, 4: 목요일, 5: 금요일, 6: 토요일)
 */