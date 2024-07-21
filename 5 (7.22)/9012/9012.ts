/**
 * 괄호
 * 문제: 입력으로 주어진 괄호 문자열이 VPS인지 아닌지를 판단해서 결과를 YES or NO로 출력
 * 입력:
 * 첫째 줄에는 입력 데이터의 수를 나타내는 정수 T가 주어진다.
 * 둘째 줄부터 T개의 줄에는 괄호 문자열이 한 줄에 하나씩 주어진다. (길이 2이상 50이하)
 * 출력:
 * 각 테스트 데이터에 대해, 입력으로 주어진 괄호 문자열이 VPS이면 YES, 아니면 NO를 한 줄에 하나씩 차례대로 출력
 */

const inputs = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const T = parseInt(inputs[0]);
const arr = inputs.slice(1);

for (let i = 0; i < T; i++) {
    const stack = [];
    const str = arr[i];
    let isVPS = true;

    for (let j = 0; j < str.length; j++) {
        if (str[j] === '(') stack.push('(');
        else {
            if (stack.length === 0) {
                isVPS = false;
                break;
            }
            stack.pop();
        }
    }

    if (stack.length > 0) isVPS = false;
    console.log(isVPS ? 'YES' : 'NO');
}

