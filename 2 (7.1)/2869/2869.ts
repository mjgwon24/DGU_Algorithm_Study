// 달팽이가 높이 V미터인 나무 막대를올라간다.
// 낮에는 A미터 올라가고 밤에는 B미터 미끄러진다.
// 정상에 도달하려면 며칠이 걸리는지 구하시오.
// input: 2 1 5, output: 4
// input: 5 1 6, output: 2

const inputs = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');

const A = parseInt(inputs[0]);
const B = parseInt(inputs[1]);
const V = parseInt(inputs[2]);

console.log(Math.ceil((V - A) / (A - B)) + 1);

/**
 * Math.ceil(): 소수점 이하를 올려 정수로 변환
 * Math.ceil((V - A) / (A - B)) + 1: 달팽이가 정상에 도달하면 미끄러지지 않으므로 V - A만큼 올라가고 +1일을 더해줌
 * A - B: 하루에 올라가는 높이
 * (V - A) / (A - B): 정상에 도달하기 전까지 올라가야 하는 높이를 하루에 올라가는 높이로 나눈다
 */