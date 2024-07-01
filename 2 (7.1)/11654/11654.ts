// 알파벳 소문자, 대문자, 숫자 0-9중 하나가 주어졌을 때, 주어진 글자의 아스키 코드값을 출력
// A -> 65, 0 -> 48, a -> 97

const input = require('fs').readFileSync('/dev/stdin').toString().trim();
console.log(input.charCodeAt(0));

/**
 * charCodeAt(): 문자열에서 주어진 인덱스에 대한 UTF-16 코드를 나타내는 0부터 65535 사이의 정수를 반환
 * */