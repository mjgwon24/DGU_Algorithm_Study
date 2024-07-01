// 알파벳 소문자, 대문자, 숫자 0-9중 하나가 주어졌을 때, 주어진 글자의 아스키 코드값을 출력
// A -> 65, 0 -> 48, a -> 97

using System;

namespace _11654 {
    class Program {
        public static void Main(String[] args) {
            char c = Console.ReadLine()[0];

            Console.WriteLine((int)c);
        }
    }
}