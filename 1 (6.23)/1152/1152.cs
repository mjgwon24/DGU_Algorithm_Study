// 문자열의 단어 개수 세기

using System;

namespace _1152 {
    class Program {
        public static void Main(String[] args) {
            int count = 0;
            string[] inputs = Console.ReadLine().Split(' ');

            foreach (string input in inputs) {
                if (input != "") {
                    count++;
                }
            }

            Console.WriteLine(count);

        }
    }
}