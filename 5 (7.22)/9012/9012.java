/**
 * 괄호
 * 문제: 입력으로 주어진 괄호 문자열이 VPS인지 아닌지를 판단해서 결과를 YES or NO로 출력
 * 입력:
 * 첫째 줄에는 입력 데이터의 수를 나타내는 정수 T가 주어진다.
 * 둘째 줄부터 T개의 줄에는 괄호 문자열이 한 줄에 하나씩 주어진다. (길이 2이상 50이하)
 * 출력:
 * 각 테스트 데이터에 대해, 입력으로 주어진 괄호 문자열이 VPS이면 YES, 아니면 NO를 한 줄에 하나씩 차례대로 출력
 */

import java.util.Scanner;
import java.util.Stack;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        // 입력
        int T = sc.nextInt();
        int[][] input = new int[T][50];
        String[] result = new String[T];

        // 입력값 저장
        for (int i = 0; i < T; i++) {
            String str = sc.next();
            result[i] = check(str);    // 결과 저장
        }

        for (int i = 0; i < T; i++) {
            System.out.println(result[i]);
        }

        sc.close();
    }

    /**
     * VPS 판별 함수
     * - 여는 괄호는 스택에 push
     * - 닫는 괄호는 스택에서 pop (스택이 비어있으면 NO)
     * - 스택이 비어있으면 YES, 아니면 NO
     */
    public static String check(String str) {
        Stack<Character> stack = new Stack<>();

        for (int i = 0; i < str.length(); i++) {
            char c = str.charAt(i);
            if (c == '(') {
                stack.push(c);
            } else if (c == ')') {
                if (!stack.isEmpty() && stack.peek() == '(') {
                    stack.pop();
                } else {
                    stack.push(c);
                }
            }
        }

        if (stack.isEmpty()) {
            return "YES";
        } else {
            return "NO";
        }
    }
}