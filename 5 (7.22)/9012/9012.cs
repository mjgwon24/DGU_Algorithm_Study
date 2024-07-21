/**
 * 괄호
 * 문제: 입력으로 주어진 괄호 문자열이 VPS인지 아닌지를 판단해서 결과를 YES or NO로 출력
 * 입력:
 * 첫째 줄에는 입력 데이터의 수를 나타내는 정수 T가 주어진다.
 * 둘째 줄부터 T개의 줄에는 괄호 문자열이 한 줄에 하나씩 주어진다. (길이 2이상 50이하)
 * 출력:
 * 각 테스트 데이터에 대해, 입력으로 주어진 괄호 문자열이 VPS이면 YES, 아니면 NO를 한 줄에 하나씩 차례대로 출력
 */

using System;
using System.Collections.Generic;

namespace _9012 {
    class Program {
        static void Main(String[] args) {
            int T = Convert.ToInt32(Console.ReadLine());
            List<string> result = new List<string>();

            for (int i = 0; i < T; i++) {
                string input = Console.ReadLine();
                result.Add(IsVPS(input) ? "YES" : "NO");
            }

            foreach (string s in result) {
                Console.WriteLine(s);
            }
        }

        static bool IsVPS(string input) {
            Stack<char> stack = new Stack<char>();
            foreach (char c in input) {
                if (c == '(') {
                    stack.Push(c);
                } else {
                    if (stack.Count == 0) {
                        return false;
                    }
                    stack.Pop();
                }
            }
            return stack.Count == 0;
        }
    }
}